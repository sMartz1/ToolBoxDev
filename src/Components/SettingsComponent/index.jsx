import React, { useState, useEffect } from "react";
import { Menu, Layout, Switch, Input, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons"
import { useAppContext } from "../../Context/AppContext";
import "./index.scss";
const { Sider, Content } = Layout;

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

export const SettingsComponent = (props) => {
    const {
        profile: { modules },
        updateProfile,
    } = useAppContext();

    const { setIsSettingsOpen } = props;

    const [items, setItems] = useState([]);
    const [selectedModule, setSelectedModule] = useState(null);
    const [indexSelectedModule, setIndexSelectedModule] = useState(-1);
    const [moduleState, setModuleState] = useState(null);
    const [modelChanged, setModelChanged] = useState(false);
    const onClick = (e) => {
        const indexM = moduleState.findIndex((m) => m.title === e.key);
        setSelectedModule(moduleState.find((m) => m.title === e.key));
        setIndexSelectedModule(indexM);
    };

    const onChangeField = (index, e) => {
        setModelChanged(true);
        let copyModuleState = [...moduleState];
        let isDirectValue =
            copyModuleState[indexSelectedModule].settings[index].type ===
            "boolean";
        copyModuleState[indexSelectedModule].settings[index].value =
            !isDirectValue ? e.target.value : e;
        setModuleState(copyModuleState);
    };

    const updateData = async () => {
        if (!modelChanged) return;
        await updateProfile(moduleState);
        setModelChanged(false);
    };
    useEffect(() => {
        setItems(setupItems());
        setModuleState(modules);
    }, []);

    useEffect(() => {
        if (indexSelectedModule < 0) return;
        setSelectedModule(moduleState[indexSelectedModule]);
    }, [indexSelectedModule, moduleState]);

    const generateFields = (moduleSelected) => {
        if (moduleSelected === null) return;
        const fields = [];
        selectedModule.settings.map((field, index) => {
            let currentField =
                field.type === "boolean" ? (
                    <Switch
                        checked={selectedModule.settings[index].value}
                        onChange={(e) => onChangeField(index, e)}
                    />
                ) : (
                    <Input
                        placeholder={field.title}
                        onChange={(e) => onChangeField(index, e)}
                        value={field.value}
                    />
                );

            let fieldToPush = (
                <div className="field-container">
                    <h4>{field.title}</h4>
                    {currentField}
                </div>
            );
            fields.push(fieldToPush);
        });
        return fields;
    };

    const getSettings = (moduleElement) => {
        if (moduleElement === null) return;
        let tempSettings = [];
        moduleElement.settings.map((setting) => {
            tempSettings.push(getItem(setting.title, setting.title));
        });
        return tempSettings;
    };

    const setupItems = () => {
        let tempItems = [];
        modules.map((element, i) => {
            tempItems.push(getItem(element.title, element.title));
        });
        return [
            getItem(
                "Module settings",
                "settingsmodules",
                null,
                tempItems,
                "group"
            ),
        ];
    };

    const capitalized = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    let fields = generateFields(selectedModule);
    return (
        <>
            <Layout>
                <Sider>
                    {" "}
                    <Menu
                        onClick={onClick}
                        defaultSelectedKeys={["1"]}
                        defaultOpenKeys={["sub1"]}
                        mode="inline"
                        rootClassName="side-menu-settings"
                        items={items}
                    />
                </Sider>
                <Layout>
                    <Content className="settings-container">
                        {selectedModule !== null ? (
                            <>
                                <h2>{capitalized(selectedModule.title)}</h2>
                                {fields.map((e) => e)}
                                <Button
                                    type="dashed"
                                    disabled={!modelChanged}
                                    onClick={updateData}
                                    className="save-button"
                                >
                                    Save
                                </Button>
                            </>
                        ) : (
                            <h1>Select a module...</h1>
                        )}
                         <Button className="exit-settings" onClick={()=>setIsSettingsOpen(false)}type="primary" shape="circle" icon={<ArrowLeftOutlined />} danger />
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

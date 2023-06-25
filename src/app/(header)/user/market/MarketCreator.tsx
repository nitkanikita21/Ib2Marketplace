import { axiosClient } from "@/axios";
import { Button, Checkbox, Dropdown, Input, Link, Modal, Spacer, Text, Textarea, useInput, useModal } from "@nextui-org/react";
import { useMemo, useState } from "react";
import { BsPlus } from "react-icons/bs";

export default function MarketCreator({ visibleButton }: { visibleButton: boolean }) {
    const { setVisible, visible } = useModal();

    const handler = () => setVisible(true);
    const {
        value: marketName,
        bindings: marketNameBindings,
    } = useInput("");
    const {
        value: marketDesc,
        bindings: marketDescBindings,
    } = useInput("");
    const {
        value: marketLogo,
        bindings: marketLogoBindings,
    } = useInput("");
    const [agreedRules, setAgredRules] = useState(false);
    const [error, setError] = useState("");

    const cities = [
        { id: "ccc", name: "Бровари" },
        { id: "cc2", name: "Бровари 2" }
    ];
    const [selectedCity, setSelectedCity] = useState(cities[0]);

    const closeHandler = () => {
        if (marketName == "") return setError("Заповніть поле Назва");
        if (marketName.length < 5) return setError("Назва має містити більше 5 символів");

        if (marketDesc == "") return setError("Заповніть поле Опис");
        if (marketDesc.length < 15) return setError("Опис має містити більше 5 символів");
        if (marketLogo == "") return setError("Заповніть поле Логотип");

        // axiosClient.post("");
    };

    if (!visibleButton) return <></>;
    const errorElem = error != "" ? <Text color="error">{error}</Text> : <></>;

    return <>
        <Button onPress={() => setVisible(true)} flat icon={<BsPlus size={24} />} color="success">
            Створити маркет
        </Button>

        <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
        >
            <Modal.Header>
                <Text id="modal-title" size={18}>
                    Створення маркету
                </Text>
            </Modal.Header>
            <Modal.Body>
                <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    labelLeft="Назва"
                    placeholder="Єдина Лавка Товарів"
                    {...marketNameBindings}
                />
                <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    labelLeft="Логотип"
                    placeholder="https://i.imgur.com/8Zfyb0S.png"
                    {...marketLogoBindings}
                />
                <Textarea
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Опис"
                    {...marketDescBindings}
                />
                <Dropdown>
                    <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
                        {selectedCity.name}
                    </Dropdown.Button>
                    <Dropdown.Menu
                        aria-label="Single selection actions"
                        color="primary"
                        disallowEmptySelection
                        selectionMode="single"
                        onSelectionChange={(e) => { /* console.log((e as Set<String>).values().next().value); */ }}
                    >
                        {cities.map(elem => <Dropdown.Item key={elem.id}>{elem.name}</Dropdown.Item>)}
                    </Dropdown.Menu>
                </Dropdown>
                <Checkbox size="sm" isSelected={agreedRules} onChange={setAgredRules}>
                    Я погоджуюсь з&nbsp;<Link href="/">правилами</Link>&nbsp;маркетплейсу
                </Checkbox>

                {errorElem}
            </Modal.Body>
            <Modal.Footer>
                <Button auto flat color="error" onPress={closeHandler}>
                    Закрити
                </Button>
                <Button auto onPress={closeHandler}>
                    Створити
                </Button>
            </Modal.Footer>
        </Modal>
    </>;
}
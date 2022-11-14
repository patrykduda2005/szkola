import * as React from "react";

class Button extends React.Component {
    render(): React.ReactNode {
        return (
            <button>Dodaj</button>
       );
    }
}

class Data extends React.Component {
    render(): React.ReactNode {
        return (
            <input required type="date" name="data"/>
       );
    }
}

class Typ extends React.Component {
    render(): React.ReactNode {
        return (
            <select name="typ">
                <option value="kart">Kartkówka</option>
                <option value="spr">Sprawdzian</option>
                <option value="pyt">Pytanie</option>
                <option value="zad">Zadanie domowe</option>
            </select>
       );
    }
}

class Przedmiot extends React.Component {
    render(): React.ReactNode {
        return (
           <select name="przedmiot">
                <option value="biologia">Biologia</option>
                <option value="chemia">Chemia</option>
                <option value="fizyka">Fizyka</option>
                <option value="geografia">Geografia</option>
                <option value="historia">Historia</option>
                <option value="informatyka">Informatyka</option>
                <option value="j.ang">J.ang</option>
                <option value="j.ang.zaw">J.ang.zaw</option>
                <option value="j.niemiecki">J.niemiecki</option>
                <option value="j.polski">J.polski</option>
                <option value="matematyka">Matematyka</option>
                <option value="pp">Podstawy_przedsiebiorczosci</option>
                <option value="pr_aplikacji">Pracownia_aplikacji_desktopowych</option>
                <option value="pr_bazy_danych">Pracownia_baz_danych</option>
                <option value="pr_stron">Pracownia_stron_i_aplikacji_internetowych</option>
                <option value="religia">Religia</option>
                <option value="w.f">W.f</option>
            </select>
       );
    }
}

class Grupa extends React.Component {
    render(): React.ReactNode {
        return (
            <select name="grupa">
                <option value="g1">Grupa1</option>
                <option value="g2">Grupa2</option>
                <option value="obie">Obie</option>
            </select>
       );
    }
}

export default class DodajForm extends React.Component {

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let obj:{[key: string]: any}= {};

        const formData = new FormData(e.currentTarget);
        formData.forEach((value, key: string) => {
            obj[key] = value;
        });
    }

    state = {
        option: "dodaj"
    };

    render (): React.ReactNode {
        if (this.state.option = "dodaj") {
        return (
            <form onSubmit={this.handleSubmit}>
                <Grupa/>
                <Przedmiot/>
                <Typ/>
                <Data/>
                <Button/>
            </form>
       );
        } else {
            return;
        }

    }
}


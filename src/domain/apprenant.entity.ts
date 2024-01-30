import { randomUUID } from "crypto";
import {  ApprenantProps } from "./apprenant.types";
import { BaseEntity } from "./entity";

export class ApprenantEntity extends BaseEntity {

    public firstName: string;
    public lastName: string;
    public email: string;
    public phone: string;
    public programName: string;
    public campusName: string;

    constructor(
        props: ApprenantProps
    ){
        super();
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.email = props.email;
        this.phone = props.phone;
        this.programName = props.programName;
        this.campusName = props.campusName;
    }

    public static createEmpty(): ApprenantEntity {
        return new ApprenantEntity({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            programName: "",
            campusName: ""
        });
    }
}


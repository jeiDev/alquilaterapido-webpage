import { FormEvent } from "react";

export interface SubmitEventI {
    (event: FormEvent<HTMLFormElement>, callback?: Function): void
}
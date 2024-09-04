import { ChangeEvent, ReactElement, useState } from "react";
import { Bold, Div, Form, WarnForm, Text } from "./styles";
import { Input } from "../ContactForm/styles";

type ElementEvent = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>;

type PropsType = {
	actualRoute: string
}

type FormEventType = {
	(event: React.FormEvent): void;
}

const FormCategoriesTags: React.FC<PropsType> = ({actualRoute}: PropsType): ReactElement => {
	const [category, setCategory] = useState<string>('');
	const [slug, setSlug] = useState<string>('');

	const handleFormSubmit: FormEventType = (event: React.FormEvent) => {
		event.preventDefault();
	}

	return (
		<Form action={actualRoute === 'new-category' ? '/new-category' : '/new-tag'} method='POST' onSubmit={handleFormSubmit}>
			<WarnForm>Campos com <Bold>*</Bold> são obrigatórios</WarnForm>

			<Div>
				<Input type='text' name='category' id='category' placeholder='Nome *' value={category}
					onChange={(event: ElementEvent): void => setCategory(event.target.value)} />
			</Div>

			<Div>
				<Input type='text' name='slug' id='slug' placeholder='Slug *' value={slug}
					onChange={(event: ElementEvent): void => setSlug(event.target.value)} />
				<Text>O “slug” é uma versão amigável do URL. Normalmente é todo em minúsculas <br />e contém apenas letras, números e hifens.</Text>
			</Div>

			<Input type='submit' value={actualRoute === 'new-category' ? 'Adicionar nova categoria': 'Adicionar nova tag' } />
		</Form>
	)
}

export default FormCategoriesTags;
import './styles.css';
import { ReactElement, useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { ContentState, EditorState, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React from 'react';
import { Div, Button, Option, Select } from './styles';

type HandleSave = () => Promise<void>;

const NewPost: React.FC = (): ReactElement => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());

	const onEditorStateChange:(newState: EditorState) => void = (newState: EditorState): void => {
    setEditorState(newState);
  };

	const handleSave: HandleSave = async (): Promise<void> => {
    const content: ContentState = editorState.getCurrentContent();
    const rawContent: string = JSON.stringify(convertToRaw(content));

    try {
      const response = await fetch('/api/savePost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: rawContent }),
      });

      if (response.ok) {
        console.log('Conteúdo salvo com sucesso');
				setEditorState(EditorState.createEmpty());
      } else {
        console.error('Erro ao salvar conteúdo');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
    }
  };
  return (
		<>
			<Editor
				editorState={editorState}
				onEditorStateChange={onEditorStateChange}
				toolbarClassName="toolbarClassName"
				wrapperClassName="wrapperClassName"
				editorClassName="editorClassName"
			/>

			<Div>
				<Select>
					<Option value='draft'>Rascunho</Option>
					<Option value='publish'>Publicar</Option>
				</Select>
				<Button className="publish" onClick={handleSave}>Aplicar</Button>
			</Div>
		</>
	)
}

export default NewPost;
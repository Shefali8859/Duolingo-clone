import { SimpleForm, Create, TextInput, ReferenceInput, NumberInput, required , SelectInput} from "react-admin";

export const ChallengeCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput 
          source="question" 
          validate={[required()]} 
          label="Question"
        />
        <SelectInput
        source="type"
        choices={[
            {id:"SELECT",
              name:"Select",
            },
            {id:"ASSIST",
              name:"ASSISTs",
            }
          ]}
          validate={[required()]} 
        />
        <ReferenceInput
          source="lessonId"
          reference="lessons"
        />
        <NumberInput
          source="order"
          validate={[required()]}
          label="Order"
        />
      </SimpleForm>
    </Create>
  );
};
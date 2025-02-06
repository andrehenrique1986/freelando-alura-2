import RadioButton from "../RadioButton";

const GroupRadio = ({ opcoes, valor, onChange }) => {
    return (
        <div>
        {
         opcoes.map((option) => (
            <RadioButton 
              key={option.valor}
              valor={option.valor}
              label={option.label}
              checked={option.valor === valor}
              onClick={() => onChange(option.valor)}
            />
         ))}
        </div>
    )
}

export default GroupRadio;
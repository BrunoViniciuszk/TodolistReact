import react, {Component} from "react";
import { FlatList, View, Text, Button } from "react-native-web";


class TodoList extends Component {

    // propriedade estática simulando lista 
    static defaultProps = {
        list:[],

        onRemove: () => {

        }
    }

    // função que trata as linhas dentro da lista
    handleRow = ({item, index}) =>{

        return(
            <View style={{flexDirection : 'row', margin: 5}}> 
                <Text style={{flex:1}}>
                    {this.formatListNumber(index)} - {item.text}
                </Text>
                <Button style={{width: 30}} title="delete" color="#000" onPress={() => this.props.onRemove(item)} />
            </View>
        )
    }

    // formatando numero de acordo com a posição do array
    formatListNumber(number){
        const digits = 2;

       return('0'.repeat(digits) + (number + 1)).slice(-digits);
    }

    render() {

        // propriedade que retorna o item dentro da lista
        const {props} = this;

        // extraindo id da lista a partir da posição do meu array
        const keyExtractor = item => item.id;

        return(
            <View>
                <FlatList
                    data={props.list} 
                    keyExtractor={keyExtractor}
                    renderItem={this.handleRow}
                />
            </View>
        )
    }
}

export default TodoList;

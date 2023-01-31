import React, {Component} from 'react';
import {List, ListItem} from "@mui/material";

class ListResults extends Component {
    componentDidMount() {
        let chatHistory = document.getElementById("myScrollPane");
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    componentDidUpdate() {
        let chatHistory = document.getElementById("myScrollPane");
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    render() {
        return (
            <List id="myScrollPane" sx={{
                width: '100%',
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                height: 100,
                border: 1,
            }}>
                {this.props.resultsOfCalculation.map((res, index) => {
                    return <ListItem key={index}
                                     sx={{
                                         display: 'flex',
                                         justifyContent: 'right',
                                         fontSize: 14,
                                         color: index === this.props.resultsOfCalculation.length - 1 ? 'red' : 'black',
                                         padding: '5px'
                                     }}>
                        {res}
                    </ListItem>
                })}
            </List>
        )

    }


}

export default ListResults;
import React, { Component } from 'react'
import Carta from './Carta';
import '../App.css'
import { FirestoreCollection } from 'react-firestore';
import { Ripple } from 'react-awesome-spinners';
import firebase from 'firebase';
import Swal from 'sweetalert2';



export class TodoList extends Component {

    onClick = (id) => {
        const db = firebase.firestore();

        db.collection("todos").doc(id).delete().then(function () {
            //Que hacer cuando se borre
            Swal.fire(
                'Hecho!',
                'Se ha completado la tarea!',
                'success'
            )
        }).catch(function (error) {
            //Que hacer cuando tire error
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo ha ido mal.'
            })

        });
    }

    render() {
        return (
            <div className="dou">
                <div className="col-md-12">
                    <div className="row dou">
                        <FirestoreCollection className="row"
                            path="todos"
                            render={({ isLoading, data }) => {
                                return isLoading ? (
                                    <Ripple />
                                ) : (
                                        <React.Fragment>
                                            {data.map(usuario => (
                                                <Carta key={usuario.id} title={usuario.title} date={usuario.date} description={usuario.description} id={usuario.id} onClick={this.onClick} />
                                            ))}
                                        </React.Fragment>
                                    )
                            }}
                        />
                        {
                            //Aca irian las cartas generadas en base a los datos
                            // this.props.todos.map((todo) => (
                            //     <Carta todo={todo} key={todo.id} delTodo={this.props.delTodo} />
                            // ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList

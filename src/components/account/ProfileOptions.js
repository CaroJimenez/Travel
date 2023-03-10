import { View, Text } from 'react-native'
import React ,{useState} from 'react'
import {Icon, ListItem} from 'react-native-elements'
import {map} from 'lodash'
import Modal from '../common/Modal'

export default function ProfileOptions() {
    const [container, setContainer] = useState(null)
const [showModal, setShowModal] = useState(false);
const onClose=()=>setShowModal((prevState)=>!prevState)
    const selectComponent =(key)=>{
        if(key==="displayName"){
            setContainer(<Text>COMPONENTE PARA NOMBRE</Text>)
        }if(key==="password"){
            setContainer(<Text>COMPONENTE PARA CONTRASEÑA</Text>)
        }
        onClose()
    }
    const optionsMenu = getOptionsMenu(selectComponent)
  return (
    <View>
        {map(optionsMenu, (option, index)=>(
            <ListItem key={index} onPress={option.onPress}>
                <Icon type={option.typeIcon}
                name={option.nameIconLeft}
                color={option.colorIcon}/>
                <ListItem.Content>
                    <ListItem.Title>{option.title}</ListItem.Title>
                </ListItem.Content>
                <Icon type={option.typeIcon}
                name={option.nameIconRight}
                color="#ccc"
                />
            </ListItem>
        ))}
        <Modal visible={showModal} close={onClose}>
            {container}
        </Modal>
      
    </View>
  )
}

function getOptionsMenu(selectComponent){
return[
    {
        title:"Cambiar nombre",
        nameIconRight:"chevron-right",
        typeIcon:"material-community",
        nameIconLeft:"account-circle",
        colorIcon:"#ccc",
        onPress:()=>selectComponent("displayName")
        
    },
    {
        title:"Cambiar contraseña",
        nameIconRight:"chevron-right",
        typeIcon:"material-community",
        nameIconLeft:"lock-reset",
        colorIcon:"#ccc",
        onPress:()=>selectComponent("password")
    }
]
}
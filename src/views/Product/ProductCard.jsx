import React from 'react'

import {motion} from 'framer-motion'

import {Typography, Tag} from 'antd'

import useMedia from '../shared/useMedia'

import logo from '../../assets/logo.png'

const {Title, Text} = Typography

const productVariants = {
    hidden:{
        opacity: 0
    },
    visible:{
        opacity: 1,
    }
}

const CustomTag = ({children, color}) => {

    return(
        <Tag style={{background: `${color}10`, border: `${color}66 solid 1px`, color: `${color}bb`, marginBottom: "5px"}}>{children}</Tag>
    )
}

const ProductCard = ({img, title, description, last, status}) => {

    const smallerLayout = useMedia(['(min-width: 1350px)', '(max-width: 1350px)'], [false, true])


    const statusColor = {
        "Released" : "#1890ff",
        "Demoing" : "#1b18ff",
        "Building" : "#9618ff",
        "Planning": "#eb2f96"
    }

    return(
        <motion.div whileHover={{x: 10}} variants={productVariants}  style={{boxShadow: " 2px 2px 15px rgb(0,118,220,0.18) ", width: smallerLayout ? "85%": "40%", height: "120px", borderRadius: "10px", cursor: 'pointer', display: "flex", justifyContent: "space-between", alignItems: "center", margin: "20px", padding: "24px"}}>
            <div>
                <div style={{display: 'flex', alignItems:'center'}}>
                    <Title level={3} style={{color: "#333", marginBottom: "8px", marginRight: '10px'}}>{title} </Title> 
                    <CustomTag color={statusColor[status]}>{status}</CustomTag>
                </div>
               
                <Text style={{color: "#555", textAlign: 'justify'}}>{description}</Text>
            </div>
            <div>
                <img src={logo} style={{height: "75px", marginleft: '10px'}}/>
            </div>
        </motion.div>
    )
}

export default ProductCard
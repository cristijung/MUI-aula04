import { 
    Box, 
    Button, 
    ButtonGroup, 
    Container, 
    Typography, 
    Tab,
    Tabs    
} from "@mui/material";
import styles from './Costumization.module.scss';
import PropTypes from 'prop-types';
import { useState } from "react";


//função das Tabs
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
      );
    }

    //Prototype para setar as props nas tabs
    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };
      
      function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
      }  




export default function Costumization() {
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
     
  
    return(
        <>
           <Container maxWidth='md'>
            <h2>Personalizando o MUI</h2>
            <Box className={styles.textContent}>
            <p>Este é um texto</p>
            </Box>

            <ButtonGroup variant='contained' color='primary' size='small'>
                <Button href='https://google.com' rel='noreferrer' target='_blank'>
                    Google
                </Button>
                <Button href='https://google.com' rel='noreferrer' target='_blank'>
                    Google
                </Button>
                <Button href='https://google.com' rel='noreferrer' target='_blank'>
                    Google
                </Button>
                <Button href='https://google.com' rel='noreferrer' target='_blank'>
                    Google
                </Button>
            </ButtonGroup>

            <Typography className={styles.textNormal}>
                    É possível personalizar o MUI de acordo com o que precisamos. Podemos alterar as cores, a tipografia e muito mais coisas.
                    De acordo com a documentação, o tema especifica a cor dos componentes, tom das superfícies, nível de sombra, opacidade 
                    apropriada dos elementos de cor, etc.
                    Os temas permitem que você aplique um tom consistente ao seu aplicativo. Ele permite que você personalize todos os aspectos 
                    de design do seu projeto para atender às necessidades específicas de sua empresa ou marca.
                    Para promover maior consistência entre os aplicativos, os tipos de tema claro e escuro estão disponíveis para você escolher. 
                    Por padrão, os componentes usam o tipo de tema claro.
            </Typography>

        {/**Inserindo o componente das Tabs */}
        <h2>Configuração da barra de Tabs</h2>
        <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Home" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
            <Tab label="Item Three" {...a11yProps(3)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            Este é o home
        </TabPanel>
        <TabPanel value={value} index={1}>
            Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
            Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
            Item Three
        </TabPanel>
        </Box>


            </Container> 
        </>
    );
}
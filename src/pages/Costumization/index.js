import { 
    Box, 
    Button, 
    ButtonGroup, 
    Container, 
    Typography 
} from "@mui/material";
import styles from './Costumization.module.scss';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        light: '#000',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

export default function Costumization() {
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
            </Container> 
        </>
    );
}
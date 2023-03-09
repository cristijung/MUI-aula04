import { Box, Button, Stack } from "@mui/material";
import MenuBase from "components/MenuBase";


export default function Menu() {
    return(
        
        <Box className='Content'>
            <Stack direction="row" spacing={1}>
                <MenuBase to='/'>
                    <Button variant='outlined'>Home</Button>
                </MenuBase>
                <MenuBase to='/Costumization'>
                    <Button variant='outlined'>Customizar</Button>
                </MenuBase>
                <MenuBase to='/Grids'>
                    <Button variant='outlined'>Grids</Button>
                </MenuBase>
                <MenuBase to='/BtnPage'>
                    <Button variant='outlined'>Botaõ</Button>
                </MenuBase>
                <MenuBase to='/Cards'>
                    <Button variant='outlined'>Cards</Button>
                </MenuBase>
                <MenuBase to='/Image'>
                    <Button variant='outlined'>Imagem</Button>
                </MenuBase>
                <MenuBase to='/Boxx'>
                    <Button variant='outlined'>Box</Button>
                </MenuBase>
                <MenuBase to='/Tabless'>
                    <Button variant='outlined'>Tabelas</Button>
                </MenuBase>
                <MenuBase to='/Formulario'>
                    <Button variant='outlined'>Formulário</Button>
                </MenuBase>
            </Stack>
        </Box>          
      
    )
}
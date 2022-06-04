import React, { Component } from 'react';
import {Linking, ToastAndroid, View, Text, Button, Image, ScrollView } from 'react-native';


class App extends Component {
  render() {

    const openUrl = async(url) => {
      if(await Linking.canOpenURL(url)) {
        await Linking.openURL(url)
      }
      else {
        ToastAndroid.show('Can\'t open this URL', ToastAndroid.SHORT)
      }
    }

    //Imagens Links
    let Banner1 = "https://www.megaisencoes.com.br/img/slider/banner-bmw.jpg";
    let Bmw1 = "https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbm9Mb3AgyyIJrjG0suyJRBODlsrjGpuaprQbhSIqppglBgKjbJl384MlficYiGHqoQxYLW7%25f3tiJ0PCJirQbLDWcQW7%251uSFbqoQh47wMvcYi9kQRAMb3islBglU%25nGcRSrQdr9o2NW8zcRacHJzuMbnW85WubGEqogMbUMdobeyJGqo9qaJ2zl3iyJHy536UrQ%25l3ulUQT9cRSrQdr9RX9W8zcRacH753MbnW85WuERRqogMbUMd03RyJGqo9qaFSQl3iyJHy5iuErQ%25l3ulU%258jcRSrQdr9SEUW8zcRacHz08MbnW85WunD4qogMbUMdgQsyJGqo9qaGEJl3iyJHy5i0BrQ%25l3ulU%25e0cRSrQdr9SRwW8zcRacHzCoMbnW85Wunm7qogMbUMdeBSyJGqo9qaDjbl3iyJHy5mSBrQ%25l3ulUCQQcRSrQdr9sRnW8zcRacH48AMbnW85WuKbYqogMbUMdeo4yJGqo9qaDJNl3iyJHy5mgSrQ%25l3ulUCGRcRSrQdr983UW8zcRacHbj7MbnW85Wuob9qogMbUMdJodyJGqo9qa3Jnl3iyJHy5Q3prQ%25l3ulURQRcRSrQdr98RtW8zcRacHbz1MbnW85WuonjqogMbUMdJHLyJGqo9qa3oOl3iyJHy5Q4ErQ%25l3ulURKjcRSrQdr98vbW8zcRacHbpzMbnW85WuuRHqogMbUMdd8syJGqo9qaaRdl3iyJHy559KrQ%25l3ulUU6UcRoj9y6cYiTycl38Uir3%25cYiA7QRWARj93N"
    let Bmw2 = "https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfvKsd10tLhu1XzWVo7puMLWFmdkAj5DOPfI2oubf4Bw8j7aA5qntUp6xbZOMVXuMwVQX9v6ODubLz2aKqf4u8jmB2fJj5DOP7Eagd%25kcWExHWpbl8FO2k3Hy2o24mBKTQBrXv6NQ%25Q0Z2Ydw6XRoYWF9QQ5DxR67F5Vu4tYCn17RUuChe3A5GybU7seGAzEdCrv0sUizrJqYDGwXHiscqwBLvSrx6KcifOxdIXCw1RSfcPT1D4VWxb7MPfN2bn%25NL10UkNPoQ0yWokbHsLoNFYHvVDB0KiIFou5KXhjHHSc3uFeCS6AC3KMfjeuzGMRJw9SkPazeqrk7B%25nMLNmqzOwLUdtzkIogOqTxIsHT6L3FlTO213iKHRIjup2TQbjcSKX3aeZQ2Y0afM3ZjmztYQ5HmPkjsagq85YCKgNLaPmlOEC5GSloIZFgpT9GCrMpF3tAlZ24rGwkZuT3pptQ%25wrxLte2ptZ8YWxw1I8zQZPtE5V1xb3EqYtB89Chb10j9O5z6E4GA0bHa4TCqL9%25rJH0Km%252Gx74WwBKHSgWQrvU%25VxdSKMlVYwX0Wh1DMSkph5byyVAbnkMLZACoQvhJ0yLkItJGFhgABHvIL38BruAqJdKX3IjEdweSiBDS6j3a9Dxz30dnMRajm4n1qsRDyk7mag%25ybOIunvLUgmlWv0T3jyXIslgpVXH2GLv63iplZh6K5hqXRjcZptARSCHw672tr93dYgMyIf2cPr87DWLxEalsUY";
    let Bmw3 = "https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbm9Mb3AgyyIJrjG0suyJRBODlsrjGpuaprQbhSIqppglBgbRJtl384MlficYiGHqoQxYLW7%25f3tiJ0PCJirQbLDWcQW7%251uSG9qoQh47wMvcYi9kQC5Mb3islBglUbQQcRScHJB9MbnMdom0yJGy53JmrQ%25r9R2bW8zWubAdqogqaJh5l3ilUQTzcRScH8ZAMbnMd09RyJGy5BRbrQ%25r9YEaW8zWunJEqogqaGjdl3ilU%257QcRScHzesMbnMdgQsyJGy5i0BrQ%25r9SDUW8zWunCjqogqaGJOl3ilU%25nGcRScHzqjMbnMdgCEyJGy5mYnrQ%25r9snYW8zWuKbbqogqaDJ%25l3ilUCQ1cRScH48WMbnMdezdyJGy5mgRrQ%25r9si8W8zWuoRHqogqa3%254l3ilURFjcRScHb8gMbnMdJoHyJGy5Q3grQ%25r98QxW8zWuonNqogqa3G7l3ilURy0cRScHbDBMbnMdd9SyJGy55oarQ%25r993DW8zWuu3Hqogqaakel3ilUEQ6cRScHF86MbnMdj%25OyJGy572UrQ%25r90FRW8zWuBcjqogqaYM1l3ilUEt%25cRScHFNCMbnMdjmuyJGy5s0ErQ%25r9KRbW8zWuBAsqogqaYCdl3ilU4F0cRScHe8oMb37ur1MESZrMcRoHSWRzMES208bq2b7uRI";
    let Bmw4 = "https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbm9Mb3AgyyIJrjG0suyJRBODlsrjGpuaprQbhSIqppglBgERntl384MlficYiGHqoQxYLW7%25f3tiJ0PCJirQbLDWcQW7%251uSGNqoQh47wMvcYi9kQC5Mb3islBglUb9ucRScHzGbMbnMdg9RyJGy5iKErQ%25r98QwW8zWuEJQqogqaGCel3ilU%25egcRScH48WMbnMdJ58yJGy5QoarQ%25r98eFW8zWuEUQqogqaDC8l3ilUC4ocRScHzDYMbnMdezOyJGy5Qi2rQbBUq2rjGLqryJR5GlJirjGNY3QcNQBUJ1";
    let BmwF = "https://3.bp.blogspot.com/-HLgkRnKOyUg/VurscqAfNUI/AAAAAAAAfLw/KPvQk94OKNcRagNzOOMa1LLuFkQ43xf1A/s1600/BMW-Vision-Next-100-12.jpg";
    let BmwF2 = "https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/NEXTGen/Visionsfahrzeuge/035_Highlight_Teaser_720x720_VisonM_Next_02_mobil.jpg.grp-transform/small/035_Highlight_Teaser_720x720_VisonM_Next_02_mobil.jpg";
    let Redes = "https://s2.glbimg.com/d6oXwb6hUgp9jEujFafrEsjtvOY=/0x0:1080x288/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/N/J/qWlChvQkGwkNWK3lRpbQ/socialmedias.png"
    let IconeM = "https://cdn-icons-png.flaticon.com/512/2001/2001105.png";

    //Carossel Banner
    let imagens = []
    for (let i = 0; i < 1; i++) {
      imagens.push(<Image style={{ alignSelf: 'center', width: 399, height: 200, margin: 10, borderRadius: 10 }} source={{ uri: Banner1}} />)
    }
    //Carrosel Feminino
    let Carrosel = []
    for (let i = 0; i < 1; i++) {
      Carrosel.push(<Image style={{width: 450, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Bmw1}} />)
    }
    for (let i = 0; i < 1; i++) {
      Carrosel.push(<Image style={{width: 450, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Bmw2}} />)
    }
    for (let i = 0; i < 1; i++) {
      Carrosel.push(<Image style={{width: 450, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Bmw3}} />)
    }
    for (let i = 0; i < 1; i++) {
      Carrosel.push(<Image style={{width: 450, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Bmw4}} />)
    }

    //Carro do futuro 1
    let Masculino = []
    for (let i = 0; i < 1; i++) {
      Masculino.push(<Image style={{alignSelf: 'center', width: 395, height: 250, margin: 10, borderRadius: 5 }} source={{ uri: BmwF }} />)
    }

    //Carro do futuro 2
    let Futuro = []
    for (let i = 0; i < 1; i++) {
      Futuro.push(<Image style={{alignSelf: 'center', width: 395, height: 350,margin: 10, borderRadius: 5 }} source={{ uri: BmwF2 }} />)
    }

    let Icone = []
    for (let i = 0; i < 1; i++) {
      Icone.push(<Image style={{alignSelf: 'center', width: 150, height: 150,margin: 10, borderRadius: 5 }} source={{ uri: IconeM }} />)
    }

    //Redes sociais Footer
    let RedesSociais = []
    for (let i = 0; i < 1; i++) {
      RedesSociais.push(<Image style={{alignSelf:'center', width: 390, height: 100, borderRadius: 10}} source={{ uri: Redes }} />)
    }



    return (
      <ScrollView>
        <View>

        <View style={{justifyContent: "space-around", display: 'flex', flex: 1, flexDirection: 'row', margin: 10,}}>
              <Button color='black' borderRadius='100' title='    HOME PAGE    ' width='150' height='50' />
              <Text style={{textAlign: 'center',textDecorationColor: 'black', fontSize: 10, textTransform: 'uppercase', textAlign: 'left', paddingTop: 10 }}>            </Text>
              <Button color='black' title='    Categorias    '></Button>
              <Text style={{ textAlign: 'center', color: 'black', fontSize: 10, textTransform: 'uppercase', textAlign: 'left', paddingTop: 10 }}>            </Text>
              <Button color='black' title='      Sobre     '></Button>
              <Text style={{ textAlign: 'center',color: 'black', fontSize: 20, textAlign: 'left', marginLeft: 100 , textAlign: 'right'}}>MY BMW APP</Text>
            </View>

          <Text style={{ color: 'black', fontSize: 10, textTransform: 'uppercase', textAlign: 'left', paddingTop: 10 }}></Text>

          <ScrollView>
            {imagens}
          </ScrollView>

          <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', margin: 7, paddingTop: 20, paddingBottom: -100}}>Nossos modelos de veiculos</Text>
          <Text style={{ color: 'black', fontSize: 10, textTransform: 'uppercase', textAlign: 'left', paddingTop: 10 }}></Text>
          <ScrollView horizontal={true}>

            {/* Chamada do Array que ira inserir as imagens vezes */}
            {Carrosel}
          </ScrollView>
          <Button paddingTop={10} title='VER MAIS'></Button>

          <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', paddingTop: 40 }}>NOTICIAS</Text>
          <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', paddingTop: 10, paddingBottom: 20 }}>Nossos modelos do futuro</Text>
          <ScrollView>

            {/* Chamada do Array que ira inserir as imagens vezes */}
            {Masculino}
          </ScrollView>
          

          {Futuro}

          <Button color={'black'} paddingTop={10} title='VER MAIS'></Button>

          <Text style={{ color: 'black', fontSize: 16, textAlign: 'left', margin: 40 }}>O novo My BMW App{'\n'}{'\n'}{'\n'}Se adapta a você tão perfeitamente quanto o seu BMW.
          {'\n'}É a ligação direta ao veículo e ao mundo da BMW, mesmo se você não estiver dentro do seu BMW.{'\n'}O My BMW App irá se tornar o seu companheiro de mobilidade diária com o seu design moderno, interface intuitiva e muitas funcionalidades.{'\n'}{'\n'}Planeje as suas viagens,envie o seu próximo destino diretamente para o seu BMW no conforto do seu sofá, verifique a autonomia antes de iniciar a viagem ou climatize o interior do automóvel facilmente.{'\n'}{'\n'} Não tem certeza se trancou o seu veículo? Verifique no aplicativo e tranque o veículo com apenas um toque.{'\n'}{'\n'}O My BMW App tem funcionalidades muito úteis e específicas para o seu veículo elétrico BMW ou veículo híbrido plug-in BMW.{'\n'}Otimize o consumo e os custos de energia com o temporizador de carregamento e do ar-condicionado.{'\n'}{'\n'} O My BMW App garante uma mobilidade sem preocupações e um prazer de conduzir o veículo elétrico ainda maior – em qualquer momento, em qualquer lugar. Your World. My BMW.</Text>
          
          <Text style={{ color: 'black', fontSize: 16, textAlign: 'center', margin: 40 }}>--------------------------------------------------------------------------------------------</Text>

          {Icone}

          <Button paddingTop={20} color={'black'} onPress={{openUrl}} title='Encontre uma Concessionária'></Button>


          <Text style={{ color: 'black',paddingTop: 15 ,fontSize: 16, textAlign: 'center'}}>---------------------------------------------------------------------------------------------------------</Text>

          <Text style={{ color: 'black', fontSize: 20, textAlign: 'left', margin: 50}}>Siga-nos nas nossas redes sociais:</Text>
          
          <ScrollView>
          {RedesSociais}
          </ScrollView>

          <Text style={{ color: 'black', fontSize: 13, textAlign: 'center', paddingTop: 50 }}>© Felipe Holanda - BMW Brasil 2022</Text>


        </View>
      </ScrollView>
    )
  }
}
export default App;
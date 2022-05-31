import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';

class App extends Component {
  render() {

    //Imagens Links
    let Banner1 = "https://www.megaisencoes.com.br/img/slider/banner-bmw.jpg";
    let Roupas_F = "https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbm9Mb3AgyyIJrjG0suyJRBODlsrjGpuaprQbhSIqppglBgKjbJl384MlficYiGHqoQxYLW7%25f3tiJ0PCJirQbLDWcQW7%251uSFbqoQh47wMvcYi9kQRAMb3islBglU%25nGcRSrQdr9o2NW8zcRacHJzuMbnW85WubGEqogMbUMdobeyJGqo9qaJ2zl3iyJHy536UrQ%25l3ulUQT9cRSrQdr9RX9W8zcRacH753MbnW85WuERRqogMbUMd03RyJGqo9qaFSQl3iyJHy5iuErQ%25l3ulU%258jcRSrQdr9SEUW8zcRacHz08MbnW85WunD4qogMbUMdgQsyJGqo9qaGEJl3iyJHy5i0BrQ%25l3ulU%25e0cRSrQdr9SRwW8zcRacHzCoMbnW85Wunm7qogMbUMdeBSyJGqo9qaDjbl3iyJHy5mSBrQ%25l3ulUCQQcRSrQdr9sRnW8zcRacH48AMbnW85WuKbYqogMbUMdeo4yJGqo9qaDJNl3iyJHy5mgSrQ%25l3ulUCGRcRSrQdr983UW8zcRacHbj7MbnW85Wuob9qogMbUMdJodyJGqo9qa3Jnl3iyJHy5Q3prQ%25l3ulURQRcRSrQdr98RtW8zcRacHbz1MbnW85WuonjqogMbUMdJHLyJGqo9qa3oOl3iyJHy5Q4ErQ%25l3ulURKjcRSrQdr98vbW8zcRacHbpzMbnW85WuuRHqogMbUMdd8syJGqo9qaaRdl3iyJHy559KrQ%25l3ulUU6UcRoj9y6cYiTycl38Uir3%25cYiA7QRWARj93N"
    let Roupas_F1 = "https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfvKsd10tLhu1XzWVo7puMLWFmdkAj5DOPfI2oubf4Bw8j7aA5qntUp6xbZOMVXuMwVQX9v6ODubLz2aKqf4u8jmB2fJj5DOP7Eagd%25kcWExHWpbl8FO2k3Hy2o24mBKTQBrXv6NQ%25Q0Z2Ydw6XRoYWF9QQ5DxR67F5Vu4tYCn17RUuChe3A5GybU7seGAzEdCrv0sUizrJqYDGwXHiscqwBLvSrx6KcifOxdIXCw1RSfcPT1D4VWxb7MPfN2bn%25NL10UkNPoQ0yWokbHsLoNFYHvVDB0KiIFou5KXhjHHSc3uFeCS6AC3KMfjeuzGMRJw9SkPazeqrk7B%25nMLNmqzOwLUdtzkIogOqTxIsHT6L3FlTO213iKHRIjup2TQbjcSKX3aeZQ2Y0afM3ZjmztYQ5HmPkjsagq85YCKgNLaPmlOEC5GSloIZFgpT9GCrMpF3tAlZ24rGwkZuT3pptQ%25wrxLte2ptZ8YWxw1I8zQZPtE5V1xb3EqYtB89Chb10j9O5z6E4GA0bHa4TCqL9%25rJH0Km%252Gx74WwBKHSgWQrvU%25VxdSKMlVYwX0Wh1DMSkph5byyVAbnkMLZACoQvhJ0yLkItJGFhgABHvIL38BruAqJdKX3IjEdweSiBDS6j3a9Dxz30dnMRajm4n1qsRDyk7mag%25ybOIunvLUgmlWv0T3jyXIslgpVXH2GLv63iplZh6K5hqXRjcZptARSCHw672tr93dYgMyIf2cPr87DWLxEalsUY";
    let Roupas_F2 = "https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbm9Mb3AgyyIJrjG0suyJRBODlsrjGpuaprQbhSIqppglBgbRJtl384MlficYiGHqoQxYLW7%25f3tiJ0PCJirQbLDWcQW7%251uSG9qoQh47wMvcYi9kQC5Mb3islBglUbQQcRScHJB9MbnMdom0yJGy53JmrQ%25r9R2bW8zWubAdqogqaJh5l3ilUQTzcRScH8ZAMbnMd09RyJGy5BRbrQ%25r9YEaW8zWunJEqogqaGjdl3ilU%257QcRScHzesMbnMdgQsyJGy5i0BrQ%25r9SDUW8zWunCjqogqaGJOl3ilU%25nGcRScHzqjMbnMdgCEyJGy5mYnrQ%25r9snYW8zWuKbbqogqaDJ%25l3ilUCQ1cRScH48WMbnMdezdyJGy5mgRrQ%25r9si8W8zWuoRHqogqa3%254l3ilURFjcRScHb8gMbnMdJoHyJGy5Q3grQ%25r98QxW8zWuonNqogqa3G7l3ilURy0cRScHbDBMbnMdd9SyJGy55oarQ%25r993DW8zWuu3Hqogqaakel3ilUEQ6cRScHF86MbnMdj%25OyJGy572UrQ%25r90FRW8zWuBcjqogqaYM1l3ilUEt%25cRScHFNCMbnMdjmuyJGy5s0ErQ%25r9KRbW8zWuBAsqogqaYCdl3ilU4F0cRScHe8oMb37ur1MESZrMcRoHSWRzMES208bq2b7uRI";
    let Roupas_F3 = "https://www.bmw.com.br/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-model-carousel-06.jpg";
    let Roupas_M = "https://www.bmw.com.br/content/dam/bmw/common/all-models/i-series/i4/navigation/bmw-i4-mini-landingpage-modelfinder.png";
    let Roupas_M2 = "https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-masculina/camisetas-masculinas/camiseta-manga-longa-gola-role-preta_23170_301_1.jpg";
    let Redes = "https://s2.glbimg.com/d6oXwb6hUgp9jEujFafrEsjtvOY=/0x0:1080x288/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/N/J/qWlChvQkGwkNWK3lRpbQ/socialmedias.png"
    let Meiospagamento = "https://cdn.shopify.com/s/files/1/0495/6241/9360/files/imagem_2021-12-24_112908_x200.png?v=1640356151";

    //Carossel Banner
    let imagens = []
    for (let i = 0; i < 1; i++) {
      imagens.push(<Image style={{ alignItems: 'center', width: 395, height: 200, margin: 10, borderRadius: 10 }} source={{ uri: Banner1}} />)
    }
    //Carrosel Feminino
    let Carrosel = []
    for (let i = 0; i < 1; i++) {
      Carrosel.push(<Image style={{width: 450, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Roupas_F}} />)
    }
    for (let i = 0; i < 1; i++) {
      Carrosel.push(<Image style={{width: 450, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Roupas_F1}} />)
    }
    for (let i = 0; i < 1; i++) {
      Carrosel.push(<Image style={{width: 450, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Roupas_F2}} />)
    }
    for (let i = 0; i < 1; i++) {
      Carrosel.push(<Image style={{width: 450, height: 350, margin: 10, borderRadius: 5 }} source={{ uri: Roupas_F3}} />)
    }

    //Carrosel Masculino
    let Masculino = []
    for (let i = 0; i < 1; i++) {
      Masculino.push(<Image style={{ width: 530, height: 350,margin: 10, borderRadius: 5 }} source={{ uri: Roupas_M }} />)
    }
    for (let i = 0; i < 1; i++) {
      Masculino.push(<Image style={{width: 200, height: 300, margin: 10, borderRadius: 5 }} source={{ uri: Roupas_M2 }} />)
    }

    //Redes sociais Footer
    let RedesSociais = []
    for (let i = 0; i < 1; i++) {
      RedesSociais.push(<Image style={{alignItems:'center', width: 540, height: 140, margin: 10, borderRadius: 45}} source={{ uri: Redes }} />)
    }

    //Meios de Pagamento
    let Meiosdepagamento = []
    for (let i = 0; i < 1; i++) {
      Meiosdepagamento.push(<Image style={{alignItems:'center', width: 540, height: 190, margin: 10}} source={{ uri: Meiospagamento }} />)
    }


    return (
      <ScrollView>
        <View>
          <Text style={{ color: 'black', fontSize: 20, textTransform: 'uppercase', margin: 7, paddingTop: 20 }}>BMW BRASIL</Text>
          <Text style={{ color: 'black', fontSize: 10, textTransform: 'uppercase', textAlign: 'left', paddingTop: 10 }}></Text>

          <ScrollView>
            {imagens}
          </ScrollView>

          <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', margin: 7, paddingTop: 20 }}>Nossos modelos de veiculos</Text>
          <Text style={{ color: 'black', fontSize: 10, textTransform: 'uppercase', textAlign: 'left', paddingTop: 10 }}></Text>
          <ScrollView horizontal={true}>

            {/* Chamada do Array que ira inserir as imagens vezes */}
            {Carrosel}
          </ScrollView>
          <Button paddingTop={10} color={'black'} title='VER MAIS'></Button>


          <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', paddingTop: 40 }}>Nossos modelos do futuro</Text>
          <Text style={{ color: 'black', fontSize: 10, textTransform: 'uppercase', textAlign: 'left', paddingTop: 10 }}></Text>
          <ScrollView horizontal={true}>

            {/* Chamada do Array que ira inserir as imagens vezes */}
            {Masculino}
          </ScrollView>
          <Button paddingTop={10} color={'black'}  title='VER MAIS'></Button>

          <Text style={{ color: 'black', fontSize: 16, textAlign: 'left', margin: 40 }}>Bem Vindo ao BAZAAR{'\n'}{'\n'}{'\n'}Nossos produtos são inspirados pelas pessoas que estão á nossa volta, com suas belezas e qualidades.{'\n'}{'\n'}Produtos de bom gosto especialmente para você.{'\n'}Descubra "our story" e aproveite as promoçôes imperdiveis.{'\n'}{'\n'}{'\n'}------------------------------------------------------------------------------------------------------------------------</Text>
          <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', margin: 50}}>Rua Eusébio 10{'\n'}Centro, Cidade das Águas{'\n'}{'\n'}Abertura de segunda a sexta das 10:00 ás 21:00{'\n'}{'\n'}</Text>

          <Text style={{ color: 'black', fontSize: 16, textAlign: 'center'}}>------------------------------------------------------------------------------------------------------------------------</Text>

          <Text style={{ color: 'black', fontSize: 20, textAlign: 'left', margin: 50}}>Siga-nos nas nossas redes sociais:</Text>

          <ScrollView>
          {RedesSociais}
          </ScrollView>

          <Text style={{ color: 'black', fontSize: 20, textAlign: 'left', margin: 50, paddingTop: 10 }}>Aceitamos as segintes bandeiras:</Text>
          
          <ScrollView>
          {Meiosdepagamento}
          </ScrollView>

          <Text style={{ color: 'black', fontSize: 13, textAlign: 'center', paddingTop: 50 }}>© Felipe Holanda - BAZAAR 2022</Text>


        </View>
      </ScrollView>
    )
  }
}
export default App;
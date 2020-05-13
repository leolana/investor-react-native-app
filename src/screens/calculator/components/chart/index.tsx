import React, { useState, useEffect } from 'react';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Container, ChartArea, LegendArea } from './styles';

import { tealish, greenishBlue } from '../../../../assets/colors';

import { Bar, Legend } from './components';
import { formatPercent, formatMoney } from '../../../../utils';

export const Chart = (props) => {
  const { tabName, data, taxes, year, value } = props;

  const [collapse, setCollapse] = useState(false);

  const [formattedData, setFormattedData] = useState({
    Tesouro: 0,
    Poupanca: 0,
    CDB: 0,
    IOUU: 0,
  });

  const formatData = (values) => {
    const obj = JSON.parse(values);

    const { Tesouro, Poupanca, CDB, IOUU } = obj;

    obj.Tesouro = Tesouro[Tesouro.length - 1];
    obj.Poupanca = Poupanca[Poupanca.length - 1];
    obj.CDB = CDB[CDB.length - 1];
    obj.IOUU = IOUU[IOUU.length - 1];

    let list = [obj.Tesouro, obj.Poupanca, obj.CDB, obj.IOUU];

    list = list.sort();

    list.map((v, i) => {
      if (v === obj.Tesouro) obj.Tesouro = (v * 100) / list[list.length - 1];
      else if (v === obj.Poupanca) obj.Poupanca = (v * 100) / list[list.length - 1];
      else if (v === obj.CDB) obj.CDB = (v * 100) / list[list.length - 1];
      else obj.IOUU = (v * 100) / list[list.length - 1];
    });

    setFormattedData(obj);
  };

  const getKey = (name) => {
    const obj = {
      Poupança: 'Poupanca',
      CDB: 'CDB',
      IOUU: 'IOUU',
      'Tesouro Direto': 'Tesouro',
    };

    return obj[name];
  };

  const getIouuTaxe = () => {
    if (taxes === undefined || taxes === null) return;

    const { ultimaTaxaMensal } = taxes[2];

    return (100 * (Math.pow(1 + ultimaTaxaMensal / 100, year * 12) - 1)).toFixed(2);
  };

  const getIouuText = () => {
    if (tabName === 'IOUU') return `de rendimento em ${year || 1} ano(s)`;
    else if (tabName === 'Poupança') return `em relação a ${tabName}`;
    else return `em relação ao ${tabName}`;
  };

  const getIouuTitle = () => {
    if (tabName === 'IOUU') return `+ ${formatPercent(getIouuTaxe())}`;
    else return `+ ${formatPercent((formattedData.IOUU - formattedData[getKey(tabName)]).toFixed(2))}`;
  };

  const calcTaxes = () => {
    if (taxes === undefined || taxes === null || tabName === 'IOUU') return 0;

    let taxeType;

    let index = 1;

    let taxeAmount = 0;

    if (tabName === 'CDB' || tabName === 'Tesouro Direto') {
      taxeType = 1;

      if (tabName === 'CDB') index = 1.1;
    } else if (tabName === 'Poupança') taxeType = 0;

    for (let i = 0; i < year * 12; i++) {
      taxeAmount += taxes[taxeType].valores[i].valorTaxa * index;
    }

    return taxeAmount.toFixed(1);
  };

  useEffect(() => {
    setCollapse(tabName === 'IOUU');

    if (taxes === undefined || taxes === null) return;

    formatData(JSON.stringify(data));
  }, [tabName, data, taxes]);

  return (
    <Container>
      <ChartArea>
        <Bar
          initialX={wp(20.3)}
          collapse={collapse}
          color={'#6EC30A'}
          percente={formattedData[getKey(tabName)] || 0}
          hideOnCollapse={true}
          title={formatPercent(calcTaxes())}
          text={`de rendimento em ${year || 1} ano(s)`}
        />

        <Bar
          initialX={-wp(20.3)}
          collapse={collapse}
          colors={[tealish, greenishBlue]}
          percente={formattedData.IOUU || 0}
          title={getIouuTitle()}
          text={getIouuText()}
        />
      </ChartArea>

      <LegendArea>
        <Legend
          initialX={wp(20.3)}
          collapse={collapse}
          hideOnCollapse={true}
          tabName=""
          title="Total investido"
          text={formatMoney(value)}
        />

        <Legend
          initialX={-wp(20.3)}
          tabName="IOUU"
          collapse={collapse}
          title="Total investido"
          text={formatMoney(value)}
        />
      </LegendArea>
    </Container>
  );
};

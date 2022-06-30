import './App.css';
import { ResponsivePie } from '@nivo/pie';
import { CardFooter, Col, Container, Input, InputGroup, Row } from 'reactstrap';
import logo from './logo.svg';
import { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';

function App() {
  const defaultValues = [
    {
      "id": "Pension & insurance",
      "label": "Pension & insurance",
      "value": 500,
    },
    {
      "id": "Miscellaneous",
      "label": "Miscellaneous",
      "value": 250,
    },
    {
      "id": "Housing",
      "label": "Housing",
      "value": 1250,
    },
    {
      "id": "Utilities",
      "label": "Utilities",
      "value": 250,
    },
    {
      "id": "Food",
      "label": "Food",
      "value": 250,
    },
    {
      "id": "Transportation",
      "label": "Transportation",
      "value": 500,
    },
    {
      "id": "Clothing",
      "label": "Clothing",
      "value": 100,
    },
    {
      "id": "Medical/Health",
      "label": "Medical/Health",
      "value": 250,
    },
    {
      "id": "Personal",
      "label": "Personal",
      "value": 250,
    },
    {
      "id": "Recreation",
      "label": "Recreation",
      "value": 250,
    },
    {
      "id": "Debts",
      "label": "Debts",
      "value": 250,
    },

  ];
  const currencies = [
    'Ksh.', 'Lek', '؋', '$', 'ƒ', '$', '₼', '$', '$', 'Br', 'BZ$', '$', '$b', 'KM', 'P', 'лв', 'R$',
    '$', '៛', '$', '$', '$', '¥', '$', '₡', 'kn', '₱', 'Kč', 'kr', 'RD$', '$', '£', '$', '€', '£',
    '$', '¢', '£', 'Q', '£', '$', 'L', '$', 'Ft', 'kr', '₹', 'Rp', '﷼', '£', '₪', 'J$', '¥', '£',
    'лв', '₩', '₩', 'лв', '₭', '£', '$', 'ден', 'RM', '₨', '$', '₮', ' د.إ', 'MT', '$', '₨',
    'ƒ', '$', 'C$', '₦', 'kr', '﷼', '₨', 'B/.', 'Gs', 'S/.', '₱', 'zł', '﷼', 'lei', '₽', '£',
    '﷼', 'Дин.', '₨', '$', '$', 'S', '₩', 'R', '₨', 'kr', 'CHF', '$', '£', 'NT$', '฿', 'TT$',
    '₺', '$', '₴', ' د.إ', '£', '$', '$U', 'лв', 'Bs', '₫', '﷼', 'Z$',
  ];
  const [data, setData] = useState(defaultValues);
  const [budget, setBudget] = useState(5000);
  const [display, setDisplay] = useState("");
  const [currency, setCurrency] = useState("Ksh.");
  useEffect(() => {
    if (budget == 0) {
      setData(defaultValues);
    }
    else {
      setData([
        {
          "id": "Pension & insurance",
          "label": "Pension & insurance",
          "value": Number((budget * 0.125).toFixed(2)),
        },
        {
          "id": "Miscellaneous",
          "label": "Miscellaneous",
          "value": Number((budget * 0.056).toFixed(2)),
        },
        {
          "id": "Housing",
          "label": "Housing",
          "value": Number((budget * 0.25).toFixed(2)),
        },
        {
          "id": "Utilities",
          "label": "Utilities",
          "value": Number((budget * 0.056).toFixed(2)),
        },
        {
          "id": "Food",
          "label": "Food",
          "value": Number((budget * 0.10).toFixed(2)),
        },
        {
          "id": "Transportation",
          "label": "Transportation",
          "value": Number((budget * 0.125).toFixed(2)),
        },
        {
          "id": "Clothing",
          "label": "Clothing",
          "value": Number((budget * 0.064).toFixed(2)),
        },
        {
          "id": "Medical/Health",
          "label": "Medical/Health",
          "value": Number((budget * 0.056).toFixed(2)),
        },
        {
          "id": "Personal",
          "label": "Personal",
          "value": Number((budget * 0.056).toFixed(2)),
        },
        {
          "id": "Recreation",
          "label": "Recreation",
          "value": Number((budget * 0.056).toFixed(2)),
        },
        {
          "id": "Debts",
          "label": "Debts",
          "value": Number((budget * 0.056).toFixed(2)),
        },

      ])
    }
    return () => {
      <></>
    }
  }, [budget])

  const checkandformat = (input: any) => {
    if (input.target.which >= 37 && input.target.which <= 40) return;

    setDisplay(input.target.value
      .replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    )
    setBudget(Number(input.target.value.replace(/[^\d.-]/g, '')));
  }

  return (
    <Container className='mt-4 text-center mx-auto'>
      <h1 className='text-center'><b>Budgeteer</b></h1>
      Smart Budgeting
      <Row>
        <Col className='mt-4' >
          <hr />
          Please enter your currency and income to calculate your budget
          <Row>
            <Col xs="12" md="4" lg={{ size: 4 }} className='mt-2'>
              <Input type='select' value={currency} onChange={(e) => setCurrency(e.target.value)}>
                {currencies.map((currency, index) => {
                  return (<option key={index} value={currency}>{currency}</option>)
                })}
              </Input>
            </Col>
            <Col className='mt-2'>
              <Input type="text" name="data" id="data" placeholder="Enter Your Budget " value={display} onChange={(e) => checkandformat(e)} />
            </Col>
          </Row>
          <hr />
        </Col>
        <Col sm="12">
          <div style={{ height: 500 }}>
            <ResponsivePie
              data={data}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              valueFormat=">-,"
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                from: 'color',
                modifiers: [
                  [
                    'darker',
                    0.2
                  ]
                ]
              }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#000"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: 'color' }}
              arcLabel={function (e) {
                return `${currency} ${e.value.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
              }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={"#000"}
              defs={[
                {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  size: 4,
                  padding: 1,
                  stagger: true
                },
                {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10
                }
              ]}
              legends={[
                {
                  anchor: 'bottom',
                  direction: 'row',
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: '#999',
                  itemDirection: 'left-to-right',
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: 'circle',
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemTextColor: '#000'
                      }
                    }
                  ]
                }
              ]}
            />
          </div>
        </Col>
      </Row>
      <CardFooter className="text-center">Made by <a href="https://karimkkanji.com">Karim K. Kanji</a> using <img src={logo} className="App-logo" height={20} /> React.JS</CardFooter>
    </Container>
  );
}

export default App;

import React, {Component} from 'react'
import {Col, Row, FormGroup, Label, Form,
        Card, CardBody, Input, CardHeader} from 'reactstrap'
import {Quote} from './quote.png'

export default class QuickQuotes extends Component{
  render(){
    return(
      <div style={{padding : '10px'}}>
        <Row>
        <Col md={4}>
          <Card >
            <img src={Quote} style={{height : '100px'}}/>
          </Card>
        </Col>

        <Col md={4}>
        </Col>

          <Col md={4}>
            <Card style={{borderRadius : '0px'}}>
              <CardHeader>Quick Quote</CardHeader>
              <CardBody style={{borderRadius : '0px'}}>
                <Form>
                  <Row>
                    <Col md={12}>
                      <FormGroup>
                        <Label>From</Label>
                        <Input
                          type = 'text'
                          name = 'from'
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={12}>
                      <FormGroup>
                        <Label>To</Label>
                        <Input
                          type = 'text'
                          name = 'from'
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={12}>
                      <FormGroup>
                        <Label>Total Weight</Label>
                        <Input
                          type = 'text'
                          name = 'from'
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={12}>
                      <FormGroup>
                        <Label>Date</Label>
                        <Input
                          type = 'text'
                          name = 'from'
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <img src={Quote} style={{height : '100px'}}/>
      </div>
    )
  }
}

import React, { Component } from 'react';
import configuration from "react-global-configuration";
import { Link } from "react-router-dom";
import { Form, Container, Row, Col, Media } from "react-bootstrap";
import { withNamespaces } from 'react-i18next';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import i18n from '../../../i18n';
class MyComponent extends Component {

    state = {
        year: new Date().getFullYear()
    }

    render() {
        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
          }

        const { t } = this.props;

        console.log("Footer-t", t);
        return (
            <>
                <footer className="new-footer-sec">
                    <Container>
                        <div className="footer-sec">
                            <Row>
                                <div className="dropdown-language resp-mrg-btn-xs col-md-12 col-lg-12" style={{display:"flex", justifyContent:"center" }}>
                                    <div style={{paddingRight:'5px'}}>
                                        <button style={{ width:'100px', backgroundColor:'#E85DBE'}} onClick={() => changeLanguage('en')}>{t("english")}</button>    
                                    </div>
                                    <div style={{paddingLeft:'5px'}}>
                                        <button style={{ width:'100px', backgroundColor:'#E85DBE'}} onClick={() => changeLanguage('sp')}>{t("spanish")}</button>
                                    </div>
                                    

                                    {/* <Dropdown>
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                            {t("language")}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => changeLanguage('en')}>{t("english")}</Dropdown.Item>
                                            <Dropdown.Item onClick={() => changeLanguage('sp')}>{t("spanish")}</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown> */}
                                </div>
                                <div className="resp-col-width resp-mrg-btn-xs col-md-12 col-lg-5">
                                    <Col className="resp-col-width">
                                        <ul className="footer-link-sec list-unstyled" >
                                            <Media as="li">
                                                <Link to="/page/about">
                                                    {t('about')}
                                                </Link>
                                            </Media>
                                            <Media as="li">
                                                <Link to="/page/contact">
                                                    {t('contact')}
                                                </Link>
                                            </Media>
                                            <Media as="li">
                                                <Link to="page/privacy">
                                                    {t('privacy')}
                                                </Link>
                                            </Media>
                                            <Media as="li">
                                                <Link to="page/terms">
                                                    {t('terms')}
                                                </Link>
                                            </Media>
                                            <Media as="li">
                                                <Link to="page/help">
                                                    {t('help')}
                                                </Link>
                                            </Media>
                                        </ul>
                                    </Col>
                                </div>
                                <div className="col-md-12 col-lg-5">
                                    <div className="copyrights">
                                        <h4>
                                            {t("copyrights")} <strong style={{ "color": "#e85dbe" }}>{t("mysecrets")}</strong> {this.state.year}. All rights reserved.
                                        </h4>
                                    </div>
                                </div>
                                <div className="resp-col-width resp-mrg-btn-xs col-md-12 col-lg-2">
                                    <ul className="footer-social-link-sec list-unstyled">
                                        <Media as="li" >
                                            <a href={configuration.get("configData.facebook_link")} target="_blank">
                                                <i className="fab fa-google"></i>
                                            </a>
                                        </Media>
                                        <Media as="li" >
                                            <a href={configuration.get("configData.facebook_link")} target="_blank">
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                        </Media>
                                        <Media as="li">
                                            <a href={configuration.get("configData.instagram_link")}>
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </Media>
                                        <Media as="li">
                                            <a href={configuration.get("configData.twitter_link")}>
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </Media>
                                    </ul>

                                    <h4>@{t("mysecrets")} </h4>
                                </div>

                            </Row>
                        </div>
                    </Container>
                </footer>
            </>
        )
    }
}
export default withNamespaces()(MyComponent);
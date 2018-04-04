import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { DefaultButton, PrimaryButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { bindActionCreators } from 'redux';
import * as listActions from '../actions/listActions';

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    
    componentDidMount(){
        this.props.actions.loadList(true);
    }

    render() {
        return (
            <div id="page-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12">
                            <div className="white-box">
                                <BootstrapTable data={this.props.userlist} >
                                <TableHeaderColumn dataField="id" isKey hidden />
                                    <TableHeaderColumn dataField="title" dataAlign="left" dataSort tdStyle={{whiteSpace: 'normal', wordWrap: 'break-word'}}>Title</TableHeaderColumn>
                                    <TableHeaderColumn dataField="body" dataAlign="left" dataSort tdStyle={{whiteSpace: 'normal', wordWrap: 'break-word'}}>Body</TableHeaderColumn>
                                </BootstrapTable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

List.propTypes = {
    userlist: PropTypes.array,
};

function mapStateToProps(state, ownProps) {
   console.log('In state', state);
   return {
       userlist : state.list.results
   }
}

function mapDispatchToProps(dispatch) {
   return { actions: bindActionCreators(Object.assign({}, listActions), dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
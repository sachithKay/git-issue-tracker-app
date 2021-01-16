import React, {Component} from 'react';
import Parent from './Parent';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DataTable from 'react-data-table-component';
import ClientAPI from '../utils/apis/ClientAPI';
import AccessAPI from '../utils/apis/AccessAPI'

class IssuePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'home',
            issueList: [],
        };
    }

    componentDidMount() {
        new AccessAPI().getAccessToken().then((accessResponse) => {
            new ClientAPI().getIssueList(accessResponse.data.access_token).then((clientResponse) => {
                this.setState({issueList: clientResponse.data.items});
            }).catch((error) => {
                window.alert('Error while retrieving git issues')
            });
        }).catch((error) => {
                window.alert('Auth failure')
            }
        );

    }

    render() {
       return(
           <Parent>
               {this.renderIssueList()}
           </Parent>
       );
    }

    renderIssueSummary() {
        const data = [{total: 1309, resolved: 123, created: 232}];
        const columns = [
            {
                name: 'Total Issues',
                selector: 'total',
                sortable: true,
            },
            {
                name: 'Created Issues',
                selector: 'created',
                sortable: true,
            },
            {
                name: 'Resolved Issues',
                selector: 'resolved',
                sortable: true,
            },
        ];

        return (
            <DataTable
                title="Issue Summary [EI]"
                columns={columns}
                data={data}
                pagination={true}
                paginationPerPage={10}
            />
        );
    }

    renderIssueList() {
        const { issueList } = this.state;
        console.log(issueList);
        const columns = [
            {
                name: 'URL',
                selector: 'html_url',
                sortable: true,
            },
            {
                name: 'Title',
                selector: 'title',
                sortable: true,
            },
            {
                name: 'Created By',
                selector: 'user.login',
                sortable: true,
            },
            {
                name: 'State',
                selector: 'state',
                sortable: true,
            },

        ];

        return (
            <DataTable
                title="Issues in EI"
                columns={columns}
                data={issueList}
            />
        );
    }
}

export default (IssuePage);
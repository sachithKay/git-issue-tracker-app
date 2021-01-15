import React, {Component} from 'react';
import Parent from './Parent';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DataTable from 'react-data-table-component';

class IssuePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'home',
        };

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(selectedTab) {
        // The active tab must be set into the state so that
        // the Tabs component knows about the change and re-renders.
        this.setState({
            activeTab: selectedTab
        });
    }


    render() {
       return(
           <Parent>
               <Tabs>
                   <TabList>
                       <Tab>Issue Summary</Tab>
                       <Tab>Issues</Tab>
                   </TabList>
                   <TabPanel>
                       {this.renderIssueSummary()}
                   </TabPanel>
                   <TabPanel>
                       <h2>issues</h2>
                   </TabPanel>
               </Tabs>
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
            />
        );
    }

    renderIssueList() {
        
    }
}

export default (IssuePage);
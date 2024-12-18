import React, { useState } from 'react';
import Table from '../../common/Table';
import styled from 'styled-components';
import { RiEyeLine, RiDeleteBinLine } from 'react-icons/ri';
import AddButton from '../../common/AddButton';

const AlertTable = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const columns = [
    { header: 'Date', accessor: 'date' },
    { header: 'Type', accessor: 'type' },
    { header: 'Sensor', accessor: 'sensor' },
    { header: 'Value', accessor: 'value' },
    { header: 'Status', accessor: 'status', 
      render: (row) => <StatusBadge status={row.status}>{row.status}</StatusBadge> 
    }
  ];

  const data = [
    { 
      date: '2024-03-20 14:30', 
      type: 'Temperature', 
      sensor: 'Sensor-A1', 
      value: '30°C',
      status: 'Critical' 
    },
  ];

  const actions = (row) => (
    <>
      <ActionButton onClick={() => console.log('View', row)}>
        <RiEyeLine />
      </ActionButton>
      <ActionButton danger onClick={() => console.log('Delete', row)}>
        <RiDeleteBinLine />
      </ActionButton>
    </>
  );

  return (
    <TableContainer>
      <Table 
        columns={columns} 
        data={data} 
        actions={actions}
        onRowClick={(row) => console.log('Row clicked:', row)}
      />
      
      <TableFooter>
        <AddButton 
          onClick={() => setIsAddModalOpen(true)} 
          label="Add Alert"
        />
      </TableFooter>
    </TableContainer>
  );
};

const StatusBadge = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${props => {
    switch (props.status.toLowerCase()) {
      case 'critical': return 'rgba(220, 53, 69, 0.1)';
      case 'warning': return 'rgba(255, 193, 7, 0.1)';
      default: return 'rgba(40, 167, 69, 0.1)';
    }
  }};
  color: ${props => {
    switch (props.status.toLowerCase()) {
      case 'critical': return '#dc3545';
      case 'warning': return '#ffc107';
      default: return '#28a745';
    }
  }};
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: ${props => props.danger ? '#dc3545' : '#8d72e1'};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: white;
  border-radius: 8px;
  padding: 1rem;
`;

const TableFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
  margin-top: 1rem;
`;

export default AlertTable; 
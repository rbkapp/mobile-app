import React, { createContext, useState } from 'react';

interface FilterContextData {
  refreshContext: string;
  organizersContext: any;
  eventsContext: any;
  eventsTicketsContext: any;
  usersPurchasesContext: any;
  usersPurchasesListContext: any;
  usersTicketsContext: any;
  filterOrganizersContext: any;
  filterEventsContext: any;
  filterEventsTicketsContext: any;
  setRefreshContext(data: string): Promise<void>;
  setOrganizersContext(data: any): Promise<void>;
  setEventsContext(data: any): Promise<void>;
  setEventsTicketsContext(data: any): Promise<void>;
  setUsersPurchasesContext(data: any): Promise<void>;
  setUsersPurchasesListContext(data: any): Promise<void>;
  setUsersTicketsContext(data: any): Promise<void>;
  setFilterOrganizersContext(data: any): Promise<void>;
  setFilterEventsContext(data: any): Promise<void>;
  setFilterEventsTicketsContext(data: any): Promise<void>;
  setFinancialFilterContext(organizersData: any, eventsData: any, eventsTicketsData: any): Promise<void>;
  clearFilter(): void;
}

const FilterContext = createContext<FilterContextData>({} as FilterContextData);

export const FilterProvider: React.FC = ({ children }) => {
	const [refreshContext, changeRefreshContext] = useState<string>('');

	const [organizersContext, changeOrganizersContext] = useState<[]>([]);
	const [eventsContext, changeEventsContext] = useState<[]>([]);
	const [eventsTicketsContext, changeEventsTicketsContext] = useState<[]>([]);
	const [usersPurchasesContext, changeUsersPurchasesContext] = useState<[]>([]);
	const [usersPurchasesListContext, changeUsersPurchasesListContext] = useState<[]>([]);
	const [usersTicketsContext, changeUsersTicketsContext] = useState<[]>([]);

	const [filterOrganizersContext, changeFilterOrganizersContext] = useState<[]>([]);
	const [filterEventsContext, changeFilterEventsContext] = useState<[]>([]);
	const [filterEventsTicketsContext, changeFilterEventsTicketsContext] = useState<[]>([]);

	async function setRefreshContext(data: string) {
		changeRefreshContext(data);
	}

	async function setOrganizersContext(data: any) {
		changeOrganizersContext(data);
	}
	async function setEventsContext(data: any) {
		changeEventsContext(data);
	}
	async function setEventsTicketsContext(data: any) {
		changeEventsTicketsContext(data);
	}
	async function setUsersPurchasesContext(data: any) {
		changeUsersPurchasesContext(data);
	}
	async function setUsersPurchasesListContext(data: any) {
		changeUsersPurchasesListContext(data);
	}
	async function setUsersTicketsContext(data: any) {
		changeUsersTicketsContext(data);
	}

	async function setFilterOrganizersContext(data: any) {
		changeFilterOrganizersContext(data);
	}
	async function setFilterEventsContext(data: any) {
		changeFilterEventsContext(data);
	}
	async function setFilterEventsTicketsContext(data: any) {
		changeFilterEventsTicketsContext(data);
	}

	async function setFinancialFilterContext(organizersData: any, eventsData: any, eventsTicketsData: any) {
		changeFilterOrganizersContext(organizersData);
		changeFilterEventsContext(eventsData);
		changeFilterEventsTicketsContext(eventsTicketsData);
	}

	function clearFilter() {
		changeFilterOrganizersContext([]);
		changeFilterEventsContext([]);
		changeFilterEventsTicketsContext([]);
	}
	return (
		<FilterContext.Provider value={{
			refreshContext,
			organizersContext,
			eventsContext,
			eventsTicketsContext,
			usersPurchasesContext,
			usersPurchasesListContext,
			usersTicketsContext,
			filterOrganizersContext,
			filterEventsContext,
			filterEventsTicketsContext,
			setRefreshContext,
			setOrganizersContext,
			setEventsContext,
			setEventsTicketsContext,
			setUsersPurchasesContext,
			setUsersPurchasesListContext,
			setUsersTicketsContext,

			setFilterOrganizersContext,
			setFilterEventsContext,
			setFilterEventsTicketsContext,
			setFinancialFilterContext,
			clearFilter,
		}}>
			{children}
		</FilterContext.Provider>
	);
};

export default FilterContext;

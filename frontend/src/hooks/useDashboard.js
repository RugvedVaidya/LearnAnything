import { useEffect, useState } from "react";

import { fetchDashboardSummary } from "../services/dashboard.service";

export default function useDashboard() {

    const [dashboard, setDashboard] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const data = await fetchDashboardSummary();

            setDashboard(data);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    return {

        dashboard,

        loading,

        refresh: loadDashboard,

    };

}
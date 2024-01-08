import Background from "@components/Background";
import Sidebar from "@components/Sidebar";
import styles from "@styles";

export default function Dashboard() {
    document.title = `Dashboard | ${import.meta.env.VITE_INFORMATION_NAME}`;

    return (
        <>
            <Background />

            <Sidebar />

            <div className={styles.all.sidebarBody}>
                <div className={styles.dashboard.container}>
                    <div className={styles.dashboard.top}>
                        <div className={styles.dashboard.topLeft}>
                            <div className={styles.dashboard.topLeftInside}>
                                <div className={styles.dashboard.topLeftAvatarContainer}>
                                    <div className={styles.dashboard.topLeftAvatarContainerInside}>
                                        <img src="/content/blooks/Default.png" draggable={false} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
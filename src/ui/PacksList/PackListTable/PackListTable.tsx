import React, { FC } from 'react';
import styles from './PackListTble.module.scss'

export type CustomTablePropsType = {

}

const PackListTable: FC<CustomTablePropsType> = () => {

    return (
        <div>
            <table>
                <thead className={styles.packHeader}>
                    <tr>
                        <th>Name</th>
                        <th>Cards</th>
                        <th>Last Updated</th>
                        <th>Created by</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {}
                </tbody>
            </table>

        </div>
    )
}
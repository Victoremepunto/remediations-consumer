export async function seed (knex) {
    await knex('playbook_run_systems').del();
    await knex('playbook_run_executors').del();
    await knex('playbook_runs').del();

    await knex('playbook_runs').insert([{
        id: '88d0ba73-0015-4e7d-a6d6-4b530cbfb5bc',
        status: 'running',
        remediation_id: '147b453d-36be-4c72-8dff-f1d24587ff71',
        created_by: 'fifi',
        created_at: '2019-12-23T08:19:36.641Z',
        updated_at: '2019-12-23T08:19:36.641Z'
    }, {
        id: '88d0ba73-0015-4e7d-a6d6-4b530cbfb6bc',
        status: 'running',
        remediation_id: '147b453d-36be-4c72-8dff-f1d24587ff72',
        created_by: 'fifi',
        created_at: '2019-12-23T08:19:36.641Z',
        updated_at: '2019-12-23T08:19:36.641Z'
    }]);

    await knex('playbook_run_executors').insert([{
        id: '66d0ba73-0015-4e7d-a6d6-4b530cbfb5bd',
        executor_id: '77c0ba73-1015-4e7d-a6d6-4b530cbfb5bd',
        executor_name: 'executor-1',
        receptor_node_id: 'Job-1',
        receptor_job_id: '65c0ba21-1015-4e7d-a6d6-4b530cbfb5bd',
        status: 'running',
        updated_at: '2019-12-23T08:20:36.641Z',
        playbook: '---\n' +
        '# Red Hat Insights has recommended one or more actions for you, a system administrator, to review and if you\n' +
        '# deem appropriate, deploy on your systems running Red Hat software. Based on the analysis, we have automatically\n' +
        '# generated an Ansible Playbook for you. Please review and test the recommended actions and the Playbook as\n' +
        '# they may contain configuration changes, updates, reboots and/or other changes to your systems. Red Hat is not\n' +
        '# responsible for any adverse outcomes related to these recommendations or Playbooks.\n' +
        '#\n' +
        '# FiFI playbook 3\n' +
        '# https://cloud.redhat.com/insights/remediations/249f142c-2ae3-4c3f-b2ec-c8c5881f8561\n' +
        '# Generated by Red Hat Insights on Wed, 12 Feb 2020 18:21:15 GMT\n' +
        '\n' +
        '# Fixes test:ping\n' +
        '# Identifier: (test:ping,fix)\n' +
        '# Version: unknown\n' +
        '- name: ping\n' +
        '  hosts: "355986a3-5f37-40f7-8f36-c3ac928ce190.example.com"\n' +
        '  tasks:\n' +
        '    - ping:\n' +
        '\n' +
        '- name: run insights\n' +
        '  hosts: "355986a3-5f37-40f7-8f36-c3ac928ce190.example.com"\n' +
        '  become: True\n' +
        '  gather_facts: False\n' +
        '  tasks:\n' +
        '    - name: run insights\n' +
        '      command: insights-client\n' +
        '      changed_when: false',
        playbook_run_id: '88d0ba73-0015-4e7d-a6d6-4b530cbfb5bc'
    }, {
        id: '55c0ba73-0215-4e7d-a6d6-4b530cbfb5bd',
        executor_id: '21a0ba73-1035-4e7d-b6d6-4b530cbfb5bd',
        executor_name: 'executor-2',
        receptor_node_id: 'Job-2',
        receptor_job_id: '42d0ba73-0015-4e7d-a6d6-4b530cbfb5bd',
        status: 'running',
        updated_at: '2019-12-23T08:20:36.641Z',
        playbook: '---\n' +
        '# Red Hat Insights has recommended one or more actions for you, a system administrator, to review and if you\n' +
        '# deem appropriate, deploy on your systems running Red Hat software. Based on the analysis, we have automatically\n' +
        '# generated an Ansible Playbook for you. Please review and test the recommended actions and the Playbook as\n' +
        '# they may contain configuration changes, updates, reboots and/or other changes to your systems. Red Hat is not\n' +
        '# responsible for any adverse outcomes related to these recommendations or Playbooks.\n' +
        '#\n' +
        '# FiFI playbook 3\n' +
        '# https://cloud.redhat.com/insights/remediations/249f142c-2ae3-4c3f-b2ec-c8c5881f8561\n' +
        '# Generated by Red Hat Insights on Wed, 12 Feb 2020 18:21:15 GMT\n' +
        '\n' +
        '# Fixes test:ping\n' +
        '# Identifier: (test:ping,fix)\n' +
        '# Version: unknown\n' +
        '- name: ping\n' +
        '  hosts: "355986a3-5f37-40f7-8f36-c3ac928ce190.example.com"\n' +
        '  tasks:\n' +
        '    - ping:\n' +
        '\n' +
        '- name: run insights\n' +
        '  hosts: "355986a3-5f37-40f7-8f36-c3ac928ce190.example.com"\n' +
        '  become: True\n' +
        '  gather_facts: False\n' +
        '  tasks:\n' +
        '    - name: run insights\n' +
        '      command: insights-client\n' +
        '      changed_when: false',
        playbook_run_id: '88d0ba73-0015-4e7d-a6d6-4b530cbfb5bc'
    }, {
        id: '66d0ba73-0015-4e7d-a6d6-4b530cbfb6bd',
        executor_id: '77c0ba73-1015-4e7d-a6d6-4b530cbfb6bd',
        executor_name: 'executor-8',
        receptor_node_id: 'Job-6',
        receptor_job_id: null,
        status: 'running',
        updated_at: '2019-12-23T08:20:36.641Z',
        playbook: '---\n' +
        '# Red Hat Insights has recommended one or more actions for you, a system administrator, to review and if you\n' +
        '# deem appropriate, deploy on your systems running Red Hat software. Based on the analysis, we have automatically\n' +
        '# generated an Ansible Playbook for you. Please review and test the recommended actions and the Playbook as\n' +
        '# they may contain configuration changes, updates, reboots and/or other changes to your systems. Red Hat is not\n' +
        '# responsible for any adverse outcomes related to these recommendations or Playbooks.\n' +
        '#\n' +
        '# FiFI playbook 3\n' +
        '# https://cloud.redhat.com/insights/remediations/249f142c-2ae3-4c3f-b2ec-c8c5881f8561\n' +
        '# Generated by Red Hat Insights on Wed, 12 Feb 2020 18:21:15 GMT\n' +
        '\n' +
        '# Fixes test:ping\n' +
        '# Identifier: (test:ping,fix)\n' +
        '# Version: unknown\n' +
        '- name: ping\n' +
        '  hosts: "355986a3-5f37-40f7-8f36-c3ac928ce190.example.com"\n' +
        '  tasks:\n' +
        '    - ping:\n' +
        '\n' +
        '- name: run insights\n' +
        '  hosts: "355986a3-5f37-40f7-8f36-c3ac928ce190.example.com"\n' +
        '  become: True\n' +
        '  gather_facts: False\n' +
        '  tasks:\n' +
        '    - name: run insights\n' +
        '      command: insights-client\n' +
        '      changed_when: false',
        playbook_run_id: '88d0ba73-0015-4e7d-a6d6-4b530cbfb6bc'
    }, {
        id: '66d0ba73-0015-4e7d-a6d6-4b530cbfb7bd',
        executor_id: '77c0ba73-1015-4e7d-a6d6-4b530cbfb7bd',
        executor_name: 'executor-3',
        receptor_node_id: 'Job-1',
        receptor_job_id: null,
        status: 'running',
        updated_at: '2019-12-23T08:20:36.641Z',
        playbook: '---\n' +
        '# Red Hat Insights has recommended one or more actions for you, a system administrator, to review and if you\n' +
        '# deem appropriate, deploy on your systems running Red Hat software. Based on the analysis, we have automatically\n' +
        '# generated an Ansible Playbook for you. Please review and test the recommended actions and the Playbook as\n' +
        '# they may contain configuration changes, updates, reboots and/or other changes to your systems. Red Hat is not\n' +
        '# responsible for any adverse outcomes related to these recommendations or Playbooks.\n' +
        '#\n' +
        '# FiFI playbook 3\n' +
        '# https://cloud.redhat.com/insights/remediations/249f142c-2ae3-4c3f-b2ec-c8c5881f8561\n' +
        '# Generated by Red Hat Insights on Wed, 12 Feb 2020 18:21:15 GMT\n' +
        '\n' +
        '# Fixes test:ping\n' +
        '# Identifier: (test:ping,fix)\n' +
        '# Version: unknown\n' +
        '- name: ping\n' +
        '  hosts: "355986a3-5f37-40f7-8f36-c3ac928ce190.example.com"\n' +
        '  tasks:\n' +
        '    - ping:\n' +
        '\n' +
        '- name: run insights\n' +
        '  hosts: "355986a3-5f37-40f7-8f36-c3ac928ce190.example.com"\n' +
        '  become: True\n' +
        '  gather_facts: False\n' +
        '  tasks:\n' +
        '    - name: run insights\n' +
        '      command: insights-client\n' +
        '      changed_when: false',
        playbook_run_id: '88d0ba73-0015-4e7d-a6d6-4b530cbfb6bc'
    }]);

    await knex('playbook_run_systems').insert([{
        id: 'a8c4bbeb-dbcf-4fdb-94bc-19e45e961cb1',
        system_id: '7b136dd2-4824-43cf-af6c-ad0ee42f9f97',
        system_name: 'system-1',
        status: 'running',
        sequence: 1,
        console: 'These are the logs for console-5',
        updated_at: '2019-12-23T18:19:36.641Z',
        playbook_run_executor_id: '66d0ba73-0015-4e7d-a6d6-4b530cbfb5bd'
    }, {
        id: 'efe54a46-9b23-478e-977c-a5553742e725',
        system_id: '3590ba1a-e0df-4092-9c23-bca863b28573',
        system_name: 'system-2',
        status: 'running',
        sequence: 13,
        console: 'These are the logs for console-6',
        updated_at: '2019-12-23T18:19:36.641Z',
        playbook_run_executor_id: '66d0ba73-0015-4e7d-a6d6-4b530cbfb5bd'
    }, {
        id: 'c35e6a09-520f-4326-85bd-aaf595b822c5',
        system_id: 'a68f36f4-b9b1-4eae-b0ad-dc528bf6b16f',
        system_name: 'system-3',
        status: 'running',
        sequence: 267,
        console: 'These are the logs for console-7',
        updated_at: '2019-12-23T18:19:36.641Z',
        playbook_run_executor_id: '55c0ba73-0215-4e7d-a6d6-4b530cbfb5bd'
    }, {
        id: 'c45e6a09-520f-4326-85bd-aaf595b822c5',
        system_id: 'a68f36f4-b9b1-4eae-b0ad-dc528bf6b17f',
        system_name: 'system-4',
        status: 'pending',
        sequence: 268,
        console: 'These are the logs for console-7',
        updated_at: '2019-12-23T18:19:36.641Z',
        playbook_run_executor_id: '66d0ba73-0015-4e7d-a6d6-4b530cbfb6bd'
    }, {
        id: 'c55e6a09-520f-4326-85bd-aaf595b822c5',
        system_id: 'a68f36f4-b9b1-4eae-b0ad-dc528bf6b18f',
        system_name: 'system-5',
        status: 'pending',
        sequence: 269,
        console: 'These are the logs for console-7',
        updated_at: '2019-12-23T18:19:36.641Z',
        playbook_run_executor_id: '66d0ba73-0015-4e7d-a6d6-4b530cbfb7bd'
    }]);
}

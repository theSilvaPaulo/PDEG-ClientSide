import Nexts from './Nexts';

describe('services - Nexts', () => {
  test('Nexts should return empty', () => {
    expect(Nexts([], [], {})).toStrictEqual([]);
  });
  test('Nexts - case 1', () => {
    const node1 = {
      id: 1,
      label: '1',
      status: 1,
      level: 1,
      weight: 2,
      slots: [1, 2],
    };
    const node2 = {
      id: 2,
      label: '2',
      status: 1,
      level: 1,
      weight: 2,
      slots: [3, 4],
    };
    const node3 = {
      id: 3,
      label: '3',
      status: 0,
      level: 1,
      weight: 2,
      slots: [5, 6],
    };
    const node4 = {
      id: 4,
      label: '4',
      status: 0,
      level: 2,
      weight: 2,
      slots: [1, 2],
    };
    const node5 = {
      id: 5,
      label: '5',
      status: 0,
      level: 2,
      weight: 2,
      slots: [3, 4],
    };
    const edges = [{
      id: 1,
      from: 1,
      to: 4,
    },
    {
      id: 2,
      from: 2,
      to: 4,
    },
    {
      id: 3,
      from: 2,
      to: 5,
    },
    {
      id: 4,
      from: 3,
      to: 5,
    }];
    const expected = [
      {
        combination: [node3],
        distance: 0,
        minimumLevel: 1,
        totalWeight: 2,
        slots: [5, 6],
        totalDistance: 0,
      },
      {
        combination: [node3, node4],
        distance: 1,
        minimumLevel: 1,
        totalWeight: 4,
        slots: [1, 2, 5, 6],
        totalDistance: 1,
      },
      {
        combination: [node4],
        distance: 1,
        minimumLevel: 1,
        totalWeight: 2,
        totalDistance: 1,
        slots: [1, 2],
      },
    ];
    const received = Nexts(
      [node1, node2, node3, node4, node5],
      edges,
      { minWeight: 2, maxWeight: 4, maxDistance: 10 },
    );
    expect(received).toStrictEqual(expected);
  });
  test('Nexts - case 2, foceMinimumLevel', () => {
    const node1 = {
      id: 1,
      label: '1',
      status: 1,
      level: 1,
      weight: 2,
      slots: [1, 2],
    };
    const node2 = {
      id: 2,
      label: '2',
      status: 1,
      level: 1,
      weight: 2,
      slots: [3, 4],
    };
    const node3 = {
      id: 3,
      label: '3',
      status: 0,
      level: 1,
      weight: 2,
      slots: [5, 6],
    };
    const node4 = {
      id: 4,
      label: '4',
      status: 0,
      level: 2,
      weight: 2,
      slots: [1, 2],
    };
    const node5 = {
      id: 5,
      label: '5',
      status: 0,
      level: 2,
      weight: 2,
      slots: [3, 4],
    };
    const edges = [{
      id: 1,
      from: 1,
      to: 4,
    },
    {
      id: 2,
      from: 2,
      to: 4,
    },
    {
      id: 3,
      from: 2,
      to: 5,
    },
    {
      id: 4,
      from: 3,
      to: 5,
    }];
    const expected = [
      {
        combination: [node3],
        distance: 0,
        minimumLevel: 1,
        totalDistance: 0,
        totalWeight: 2,
        slots: [5, 6],
      },
      {
        combination: [node3, node4],
        distance: 1,
        minimumLevel: 1,
        totalDistance: 1,
        totalWeight: 4,
        slots: [1, 2, 5, 6],
      },
    ];
    const received = Nexts(
      [node1, node2, node3, node4, node5],
      edges,
      {
        minWeight: 2,
        maxWeight: 4,
        maxDistance: 10,
        forceMinimumLevel: true,
      },
    );
    expect(received).toStrictEqual(expected);
  });
  test('Nexts - case 2, mustIncludeNodes', () => {
    const node1 = {
      id: 1,
      label: '1',
      status: 1,
      level: 1,
      weight: 2,
      slots: [1, 2],
    };
    const node2 = {
      id: 2,
      label: '2',
      status: 1,
      level: 1,
      weight: 2,
      slots: [3, 4],
    };
    const node3 = {
      id: 3,
      label: '3',
      status: 0,
      level: 1,
      weight: 2,
      slots: [5, 6],
    };
    const node4 = {
      id: 4,
      label: '4',
      status: 0,
      level: 2,
      weight: 2,
      slots: [1, 2],
    };
    const node5 = {
      id: 5,
      label: '5',
      status: 0,
      level: 2,
      weight: 2,
      slots: [3, 4],
    };
    const edges = [{
      id: 1,
      from: 1,
      to: 4,
    },
    {
      id: 2,
      from: 2,
      to: 4,
    },
    {
      id: 3,
      from: 2,
      to: 5,
    },
    {
      id: 4,
      from: 3,
      to: 5,
    }];
    const expected = [
      {
        combination: [node3, node4],
        distance: 1,
        minimumLevel: 1,
        totalDistance: 1,
        totalWeight: 4,
        slots: [1, 2, 5, 6],
      },
      {
        combination: [node4],
        distance: 1,
        minimumLevel: 1,
        totalDistance: 1,
        totalWeight: 2,
        slots: [1, 2],
      },
    ];
    const received = Nexts(
      [node1, node2, node3, node4, node5],
      edges,
      {
        minWeight: 2,
        maxWeight: 4,
        maxDistance: 10,
        mustIncludeNodes: [4],
      },
    );
    expect(received).toStrictEqual(expected);
  });
  test('Nexts - case 2, mustNotIncludeSlots', () => {
    const node1 = {
      id: 1,
      label: '1',
      status: 1,
      level: 1,
      weight: 2,
      slots: [1, 2],
    };
    const node2 = {
      id: 2,
      label: '2',
      status: 1,
      level: 1,
      weight: 2,
      slots: [3, 4],
    };
    const node3 = {
      id: 3,
      label: '3',
      status: 0,
      level: 1,
      weight: 2,
      slots: [5, 6],
    };
    const node4 = {
      id: 4,
      label: '4',
      status: 0,
      level: 2,
      weight: 2,
      slots: [1, 2],
    };
    const node5 = {
      id: 5,
      label: '5',
      status: 0,
      level: 2,
      weight: 2,
      slots: [3, 4],
    };
    const edges = [{
      id: 1,
      from: 1,
      to: 4,
    },
    {
      id: 2,
      from: 2,
      to: 4,
    },
    {
      id: 3,
      from: 2,
      to: 5,
    },
    {
      id: 4,
      from: 3,
      to: 5,
    }];
    const expected = [{
      combination: [node4],
      distance: 1,
      minimumLevel: 1,
      totalDistance: 1,
      totalWeight: 2,
      slots: [1, 2],
    },
    ];
    const received = Nexts(
      [node1, node2, node3, node4, node5],
      edges,
      {
        minWeight: 2,
        maxWeight: 4,
        maxDistance: 10,
        mustNotIncludeSlots: [5],
      },
    );
    expect(received).toStrictEqual(expected);
  });
});

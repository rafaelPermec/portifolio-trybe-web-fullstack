from src.elevator import Elevator, ElevatorStatus


def test_create_elevator():
    elevator = Elevator()
    assert elevator.current_floor == 0
    assert elevator.door_is_open is False
    assert elevator._status == ElevatorStatus.STOPPED


def test_move_up():
    elevator = Elevator()
    elevator.current_floor = 0
    destination_floor = 5
    elevator.move(destination_floor)

    assert elevator.door_is_open is False
    assert elevator._status == ElevatorStatus.GOING_UP
    assert elevator.current_floor == destination_floor


def test_move_down():
    elevator = Elevator()
    elevator.current_floor = 5
    destination_floor = 1
    elevator.move(destination_floor)

    assert elevator.door_is_open is False
    assert elevator._status == ElevatorStatus.GOING_DOWN
    assert elevator.current_floor == destination_floor


def test_same_floor():
    elevator = Elevator()
    elevator.current_floor = 5
    destination_floor = 5
    elevator.move(destination_floor)

    assert elevator.door_is_open is True
    assert elevator._status == ElevatorStatus.STOPPED
    assert elevator.current_floor == destination_floor

"""empty message

Revision ID: 6fa3dec85154
Revises: ecc1db0c1548
Create Date: 2022-06-03 15:30:40.417113

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6fa3dec85154'
down_revision = 'ecc1db0c1548'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('ICA',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_ICA_name'), 'ICA', ['name'], unique=False)
    op.create_table('country',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_country_name'), 'country', ['name'], unique=True)
    op.create_table('squad',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_squad_name'), 'squad', ['name'], unique=False)
    op.create_table('type_of_employee',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_type_of_employee_name'), 'type_of_employee', ['name'], unique=True)
    op.create_table('type_of_expense',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_type_of_expense_name'), 'type_of_expense', ['name'], unique=False)
    op.create_table('band',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.Text(), nullable=True),
    sa.Column('country_id', sa.Integer(), nullable=True),
    sa.Column('salary', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['country_id'], ['country.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_band_name'), 'band', ['name'], unique=False)
    op.create_table('expense',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('employee_mail', sa.Text(), nullable=True),
    sa.Column('cost', sa.Float(), nullable=True),
    sa.Column('type_id', sa.Text(), nullable=True),
    sa.Column('ICA_id', sa.Integer(), nullable=True),
    sa.Column('ICA_mail', sa.Text(), nullable=True),
    sa.Column('admin_mail', sa.Text(), nullable=True),
    sa.Column('comments', sa.Text(), nullable=True),
    sa.ForeignKeyConstraint(['ICA_id'], ['ICA.id'], ),
    sa.ForeignKeyConstraint(['type_id'], ['type_of_expense.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_expense_ICA_mail'), 'expense', ['ICA_mail'], unique=False)
    op.create_index(op.f('ix_expense_admin_mail'), 'expense', ['admin_mail'], unique=False)
    op.create_index(op.f('ix_expense_comments'), 'expense', ['comments'], unique=False)
    op.create_index(op.f('ix_expense_cost'), 'expense', ['cost'], unique=False)
    op.create_index(op.f('ix_expense_description'), 'expense', ['description'], unique=False)
    op.create_index(op.f('ix_expense_employee_mail'), 'expense', ['employee_mail'], unique=False)
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.Text(), nullable=True),
    sa.Column('password', sa.Text(), nullable=True),
    sa.Column('role', sa.Integer(), nullable=True),
    sa.Column('country_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['country_id'], ['country.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_user_email'), 'user', ['email'], unique=True)
    op.create_table('employee',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.Text(), nullable=True),
    sa.Column('last_name', sa.Text(), nullable=True),
    sa.Column('email', sa.Text(), nullable=True),
    sa.Column('country_id', sa.Integer(), nullable=True),
    sa.Column('typeOfEmployee_id', sa.Integer(), nullable=True),
    sa.Column('band_id', sa.Integer(), nullable=True),
    sa.Column('ICA_id', sa.Integer(), nullable=True),
    sa.Column('squad_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['ICA_id'], ['ICA.id'], ),
    sa.ForeignKeyConstraint(['band_id'], ['band.id'], ),
    sa.ForeignKeyConstraint(['country_id'], ['country.id'], ),
    sa.ForeignKeyConstraint(['squad_id'], ['squad.id'], ),
    sa.ForeignKeyConstraint(['typeOfEmployee_id'], ['type_of_employee.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_employee_email'), 'employee', ['email'], unique=True)
    op.create_index(op.f('ix_employee_first_name'), 'employee', ['first_name'], unique=False)
    op.create_index(op.f('ix_employee_last_name'), 'employee', ['last_name'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_employee_last_name'), table_name='employee')
    op.drop_index(op.f('ix_employee_first_name'), table_name='employee')
    op.drop_index(op.f('ix_employee_email'), table_name='employee')
    op.drop_table('employee')
    op.drop_index(op.f('ix_user_email'), table_name='user')
    op.drop_table('user')
    op.drop_index(op.f('ix_expense_employee_mail'), table_name='expense')
    op.drop_index(op.f('ix_expense_description'), table_name='expense')
    op.drop_index(op.f('ix_expense_cost'), table_name='expense')
    op.drop_index(op.f('ix_expense_comments'), table_name='expense')
    op.drop_index(op.f('ix_expense_admin_mail'), table_name='expense')
    op.drop_index(op.f('ix_expense_ICA_mail'), table_name='expense')
    op.drop_table('expense')
    op.drop_index(op.f('ix_band_name'), table_name='band')
    op.drop_table('band')
    op.drop_index(op.f('ix_type_of_expense_name'), table_name='type_of_expense')
    op.drop_table('type_of_expense')
    op.drop_index(op.f('ix_type_of_employee_name'), table_name='type_of_employee')
    op.drop_table('type_of_employee')
    op.drop_index(op.f('ix_squad_name'), table_name='squad')
    op.drop_table('squad')
    op.drop_index(op.f('ix_country_name'), table_name='country')
    op.drop_table('country')
    op.drop_index(op.f('ix_ICA_name'), table_name='ICA')
    op.drop_table('ICA')
    # ### end Alembic commands ###

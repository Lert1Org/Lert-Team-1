"""empty message

Revision ID: 984f0688a056
Revises: 6ef1fc2355ce
Create Date: 2022-05-20 14:52:26.484453

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '984f0688a056'
down_revision = '6ef1fc2355ce'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('employee', sa.Column('band_id', sa.Integer(), nullable=True))
    op.add_column('employee', sa.Column('ICA_id', sa.Integer(), nullable=True))
    op.add_column('employee', sa.Column('squad_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'employee', 'band', ['band_id'], ['id'])
    op.create_foreign_key(None, 'employee', 'ICA', ['ICA_id'], ['id'])
    op.create_foreign_key(None, 'employee', 'squad', ['squad_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'employee', type_='foreignkey')
    op.drop_constraint(None, 'employee', type_='foreignkey')
    op.drop_constraint(None, 'employee', type_='foreignkey')
    op.drop_column('employee', 'squad_id')
    op.drop_column('employee', 'ICA_id')
    op.drop_column('employee', 'band_id')
    # ### end Alembic commands ###

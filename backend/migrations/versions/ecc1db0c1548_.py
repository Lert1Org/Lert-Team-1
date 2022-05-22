"""empty message

Revision ID: ecc1db0c1548
Revises: 6b61fc020e14
Create Date: 2022-05-21 15:01:15.724685

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ecc1db0c1548'
down_revision = '6b61fc020e14'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('band', sa.Column('name', sa.Text(), nullable=True))
    op.create_index(op.f('ix_band_name'), 'band', ['name'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_band_name'), table_name='band')
    op.drop_column('band', 'name')
    # ### end Alembic commands ###
